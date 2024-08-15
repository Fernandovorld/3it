package com.nuevo.nuevo_proyecto.services;

import com.nuevo.nuevo_proyecto.dao.IEncuestaDao;
import com.nuevo.nuevo_proyecto.entity.Encuesta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Service
@Transactional
public class ServiceEncuestaImp implements IServiceEncuesta {
    @Autowired
    public IEncuestaDao servicioEncuesta;
    @Override
    public List<Encuesta> findAllEncuestas() {
        return servicioEncuesta.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Map<String, Long> findCantidad() {
        Map<String, Long> resultado = new HashMap<>();

        List<Object[]> estilosYConteo = servicioEncuesta.findEstilosYConteo();
        for (Object[] estiloYConteo : estilosYConteo) {
            String estilo = (String) estiloYConteo[0];
            Long conteo = (Long) estiloYConteo[1];
            resultado.put(estilo, conteo);
        }

        // Añadir los estilos que no están presentes en la base de datos con un conteo de 0
        List<String> estilosPredefinidos = List.of("Rock", "Pop", "Clásica", "Salsa");
        for (String estilo : estilosPredefinidos) {
            resultado.putIfAbsent(estilo, 0L);
        }

        return resultado;
    }


    @Override
    @Transactional()
    public Map<String, String> insertNewEncuestas(Encuesta encuesta) {
        Map<String, String> respuesta = new HashMap<>();

        if (servicioEncuesta.findById(encuesta.getEmail()).isPresent()) {
            respuesta.put("respuesta", "Usted ya votó!");
        } else {
            servicioEncuesta.save(encuesta);
            respuesta.put("respuesta", "Su votación fue ingresada correctamente!");
        }

        return respuesta;
    }

}
