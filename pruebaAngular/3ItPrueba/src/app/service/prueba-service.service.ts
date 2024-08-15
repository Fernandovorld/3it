import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PruebaServiceService {
  ip: string = "localhost";
  constructor(private http: HttpClient) { }

  getQuery(query: string): Observable<any> {
     const url = `http://${this.ip}:8080/${query}`;
    return this.http.get(url );
  }
  putQuery(query: string, cuerpo: any): Observable<any>  {
    const url = `http://${this.ip}:8080/${query}`;
    return this.http.put(url, cuerpo);
  }
}
