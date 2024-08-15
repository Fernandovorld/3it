import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [          MatButtonModule,
    CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}
  encuesta(){
    this.router.navigate(['/encuesta']);
  }
  resultado(){
    this.router.navigate(['/resultado']);
  }
}
