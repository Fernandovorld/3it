package com.nuevo.nuevo_proyecto.controllerTest;
import com.nuevo.nuevo_proyecto.controllers.EncuestaController;
import com.nuevo.nuevo_proyecto.entity.Encuesta;
import com.nuevo.nuevo_proyecto.services.IServiceEncuesta;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.*;

class EncuestaControllerTest {
    private EncuestaController encuestaController;

    @Mock
    private IServiceEncuesta servicioEncuesta;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        encuestaController = new EncuestaController(servicioEncuesta);
    }

    @Test
    void getName() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "respuesta nueva");
        ResponseEntity<Map<String, String>> expectedResponse = ResponseEntity.status(HttpStatus.OK).body(response);

        ResponseEntity<Map<String, String>> actualResponse = encuestaController.getName();

        assertEquals(expectedResponse, actualResponse);
    }

    @Test
    void insertar() {
        Encuesta encuesta = new Encuesta();
        Map<String, String> response = new HashMap<>();
        response.put("message", "Encuesta inserted successfully");
        ResponseEntity<Map<String, String>> expectedResponse = ResponseEntity.status(HttpStatus.OK).body(response);

        when(servicioEncuesta.insertNewEncuestas(encuesta)).thenReturn(response);

        ResponseEntity<Map<String, String>> actualResponse = encuestaController.insertar(encuesta);

        assertEquals(expectedResponse, actualResponse);
    }

    @Test
    void getTotales() {
        Map<String, Long> response = new HashMap<>();
        response.put("total", 10L);
        ResponseEntity<Map<String, Long>> expectedResponse = ResponseEntity.status(HttpStatus.OK).body(response);

        when(servicioEncuesta.findCantidad()).thenReturn(response);

        ResponseEntity<Map<String, Long>> actualResponse = encuestaController.getTotales();

        assertEquals(expectedResponse, actualResponse);
    }
}