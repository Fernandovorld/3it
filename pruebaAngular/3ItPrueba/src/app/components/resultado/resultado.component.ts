import { Component, OnInit } from '@angular/core';
import { GraficoComponent } from './grafico/grafico.component';
import { ServiceEncuestaService } from '../../service/service-encuesta.service';
import {NgClass, NgIf} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router"; // Asegúrate de que la ruta sea correcta



@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  standalone: true,
  imports: [
    NgClass,
    GraficoComponent,
    NgIf,
    MatTableModule,
    MatCardModule,
    MatButton,
    // Asegúrate de importar GraficoComponent aquí
    // otros imports necesarios
  ]
})
export class ResultadoComponent implements OnInit {
  chartData: number[] = [];
  chartLabels: string[] = [];
  isLoading = true; // Estado de carga

  displayedColumns: string[] = ['tipoMusica', 'cantidadVotos'];
  dataSource: { tipoMusica: string, cantidadVotos: number }[] = [];

  constructor(private services: ServiceEncuestaService, private router: Router) {}

  ngOnInit(): void {
    // Obtener los datos del backend
    this.services.buscarResultados().subscribe(data => {
      console.log("Esto es lo que viene en toda la data", data);

      // Convertir el objeto en arrays para chartData y chartLabels
      this.chartLabels = Object.keys(data);
      this.chartData = Object.values(data);

      console.log("Labels: ", this.chartLabels);
      console.log("Data: ", this.chartData);

      this.isLoading = false; // Indicar que los datos han sido cargados
      this.dataSource = this.chartLabels.map((label, index) => ({
        tipoMusica: label,
        cantidadVotos: this.chartData[index]
      }));
    });
  }
  volver(){
    this.router.navigate(['/']).then(r => console.log(r));
  }
}
