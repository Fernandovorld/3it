package com.nuevo.nuevo_proyecto.dao;

import com.nuevo.nuevo_proyecto.entity.Encuesta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IEncuestaDao extends JpaRepository<Encuesta, String>{

    @Query("SELECT e.name, COUNT(e) FROM Encuesta e GROUP BY e.name")
    List<Object[]> findEstilosYConteo();
}
