import { Injectable } from '@angular/core';
import {PruebaServiceService} from "./prueba-service.service";
import {Encuesta} from "../class/encuesta";

@Injectable({
  providedIn: 'root'
})
export class ServiceEncuestaService {

  constructor( private servicio:PruebaServiceService) {
  }
  getDato( ){
    return this.servicio.getQuery("api/controllers");
  }
  insertDato(encuesta:Encuesta ){
    return this.servicio.putQuery("api/insertar",encuesta  );

  }

  buscarResultados(){
    return this.servicio.getQuery("api/total");
  }
}
