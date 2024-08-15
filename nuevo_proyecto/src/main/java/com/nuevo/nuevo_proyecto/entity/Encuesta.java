package com.nuevo.nuevo_proyecto.entity;


import jakarta.persistence.*;
import lombok.*;


import java.io.Serializable;

@Entity
@Table(name = "encuesta")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Encuesta implements Serializable {
    private static final long serialVersionUID =  1L;

     @Id
     private String email;

     private String name;

}
