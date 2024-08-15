package com.nuevo.nuevo_proyecto.entityTest;
import com.nuevo.nuevo_proyecto.entity.Encuesta;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;


class EncuestaTest {

    @Test
    void setEmail() {
        Encuesta encuesta = new Encuesta();
        String expectedEmail = "test@test.com";

        encuesta.setEmail(expectedEmail);

        assertEquals(expectedEmail, encuesta.getEmail());
    }

    @Test
    void getName() {
        Encuesta encuesta = new Encuesta();
        String expectedName = "John Doe";

        encuesta.setName(expectedName);

        assertEquals(expectedName, encuesta.getName());
    }

    @Test
    void constructorWithArguments() {
        String expectedEmail = "test@test.com";
        String expectedName = "John Doe";

        Encuesta encuesta = new Encuesta(expectedEmail, expectedName);

        assertEquals(expectedEmail, encuesta.getEmail());
        assertEquals(expectedName, encuesta.getName());
    }

    @Test
    void constructorWithoutArguments() {
        Encuesta encuesta = new Encuesta();

        assertNull(encuesta.getEmail());
        assertNull(encuesta.getName());
    }
}