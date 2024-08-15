package com.nuevo.nuevo_proyecto.controllers;

import com.nuevo.nuevo_proyecto.entity.Encuesta;
import com.nuevo.nuevo_proyecto.services.IServiceEncuesta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@CrossOrigin(origins ="*",  allowedHeaders = "*", maxAge = 3600 )
@RestController()
@RequestMapping("api")
public class EncuestaController {
    private final IServiceEncuesta servicioEncuesta;
    @Autowired
    public EncuestaController(IServiceEncuesta servicioEncuesta) {
        this.servicioEncuesta = servicioEncuesta;
    }

    @GetMapping("/controllers")
    public ResponseEntity<Map<String, String>> getName() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "respuesta nueva");
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @PutMapping("/insertar")
    public ResponseEntity<Map<String,String>> insertar(@RequestBody Encuesta encuesta ){
        return ResponseEntity.status(HttpStatus.OK).body(servicioEncuesta.insertNewEncuestas(encuesta));
    }
    @GetMapping("/total")
    public ResponseEntity<Map<String, Long>> getTotales() {

        return ResponseEntity.status(HttpStatus.OK).body(servicioEncuesta.findCantidad());
    }

}

