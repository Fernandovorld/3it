import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css'],
  standalone: true,
})
export class GraficoComponent implements OnInit {
  @Input() data!: number[];
  @Input() labels!: string[];

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    const ctx = document.getElementById('myPieChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: [
          {
            data: this.data,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          },
        ],
      },
    });
  }
}
