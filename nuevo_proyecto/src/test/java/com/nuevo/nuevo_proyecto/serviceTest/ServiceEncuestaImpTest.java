package com.nuevo.nuevo_proyecto.serviceTest;



import com.nuevo.nuevo_proyecto.dao.IEncuestaDao;
import com.nuevo.nuevo_proyecto.entity.Encuesta;
import com.nuevo.nuevo_proyecto.services.ServiceEncuestaImp;
import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
class ServiceEncuestaImpTest {

    private ServiceEncuestaImp service;

    @Mock
    private IEncuestaDao dao;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        service = new ServiceEncuestaImp();
        service.servicioEncuesta = dao;
    }

    @Test
    public void testFindAllEncuestas() {
        // given
        List<Encuesta> expected = Arrays.asList(new Encuesta(), new Encuesta());
        when(dao.findAll()).thenReturn(expected);

        // when
        List<Encuesta> actual = service.findAllEncuestas();

        // then
        assertEquals(expected, actual);
        verify(dao).findAll();
    }

    @Test
    public void testFindCantidad() {
        // given
        List<Object[]> expected = Arrays.asList(
                new Object[]{"Rock", 2L},
                new Object[]{"Pop", 1L}
        );
        when(dao.findEstilosYConteo()).thenReturn(expected);

        // when
        Map<String, Long> actual = service.findCantidad();

        // then
        Map<String, Long> expectedMap = new HashMap<>();
        expectedMap.put("Rock", 2L);
        expectedMap.put("Pop", 1L);
        expectedMap.put("Clásica", 0L);
        expectedMap.put("Salsa", 0L);
        assertEquals(expectedMap, actual);
        verify(dao).findEstilosYConteo();
    }

    @Test
    public void testInsertNewEncuestas_whenEmailIsNotPresent() {
        // given
        Encuesta encuesta = new Encuesta();
        encuesta.setEmail("test@example.com");
        when(dao.findById("test@example.com")).thenReturn(Optional.empty());

        // when
        Map<String, String> actual = service.insertNewEncuestas(encuesta);

        // then
        Map<String, String> expected = new HashMap<>();
        expected.put("respuesta", "Su votación fue ingresada correctamente!");
        assertEquals(expected, actual);
        verify(dao).findById("test@example.com");
        verify(dao).save(encuesta);
    }

    @Test
    public void testInsertNewEncuestas_whenEmailIsPresent() {
        // given
        Encuesta encuesta = new Encuesta();
        encuesta.setEmail("test@example.com");
        when(dao.findById("test@example.com")).thenReturn(Optional.of(encuesta));

        // when
        Map<String, String> actual = service.insertNewEncuestas(encuesta);

        // then
        Map<String, String> expected = new HashMap<>();
        expected.put("respuesta", "Usted ya votó!");
        assertEquals(expected, actual);
        verify(dao).findById("test@example.com");
        verify(dao, never()).save(any());
    }


}