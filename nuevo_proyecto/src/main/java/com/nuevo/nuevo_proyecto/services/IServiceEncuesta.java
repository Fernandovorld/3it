package com.nuevo.nuevo_proyecto.services;

import com.nuevo.nuevo_proyecto.entity.Encuesta;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

public interface IServiceEncuesta {

    public List<Encuesta> findAllEncuestas();
    public Map<String, Long> findCantidad();

    public Map<String,String> insertNewEncuestas(Encuesta encuestas);

   }
