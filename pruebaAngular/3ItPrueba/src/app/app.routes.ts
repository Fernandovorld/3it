import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {EncuestaComponent} from "./components/encuesta/encuesta.component";
import {ResultadoComponent} from "./components/resultado/resultado.component";
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'encuesta', component:EncuestaComponent},
  {path: 'resultado', component:ResultadoComponent},
  {path: '', pathMatch:'full', redirectTo:'home'},
  {path: '**', pathMatch:'full', redirectTo:'home'}


];
