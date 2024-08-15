import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {ServiceEncuestaService} from "../../service/service-encuesta.service";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {Encuesta} from "../../class/encuesta";
import {
  MatDialog,
} from '@angular/material/dialog';
import {DialogoComponentComponent} from "./dialogo-component/dialogo-component.component";
import {Router} from "@angular/router";

interface Musica {
  value: string;
  viewValue: string;
}
export interface DialogData {
  respuesta: string;
  mensaje: string;
}

@Component({
  selector: 'app-encuesta',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    NgForOf,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,

  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  selectedMusica = '';
  musica: Musica[] = [
    {value: 'Rock', viewValue: 'Rock'},
    {value: 'Pop', viewValue: 'Pop'},
    {value: 'Clásica', viewValue: 'Clásica'},
    {value: 'Salsa', viewValue: 'Salsa'}
  ];
  readonly dialog = inject(MatDialog);
  encuesta: Encuesta = new Encuesta(); // Inicializamos la encuesta

  constructor(private services: ServiceEncuestaService, private router: Router) {}

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  ngOnInit(): void {
    this.services.getDato().subscribe((data) => {
      console.log("Pasando por aquí");
      console.log("Esto es lo que lanza: " + JSON.stringify(data));
    });
  }

  guardar(): void {
    if (this.emailFormControl.valid && this.selectedMusica != '') {
      const emailProcesado = this.emailFormControl.value?.trim().toLowerCase();
      this.encuesta.email = emailProcesado;
      this.encuesta.name = this.selectedMusica;
      console.log("ESTO ES LO QUE LLEVO " + JSON.stringify(this.encuesta));

      this.services.insertDato(this.encuesta).subscribe(data => {
        console.log("esto es lo que devuelve la consulta" + JSON.stringify(data));
        this.dialog.open(DialogoComponentComponent, {
          data: {mensaje: data.respuesta},
        });
      });

    } else {
      console.log("El formulario no es válido.");
    }
  }
  volver(){
    this.router.navigate(['/']).then(r => console.log(r));
  }
}
