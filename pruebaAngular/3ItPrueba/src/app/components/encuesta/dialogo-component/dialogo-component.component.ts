import {Component, inject, model} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {DialogData} from "../encuesta.component";

@Component({
  selector: 'app-dialogo-component',
  standalone: true,
  imports: [    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,],
  templateUrl: './dialogo-component.component.html',
  styleUrl: './dialogo-component.component.css'
})
export class DialogoComponentComponent {
  readonly dialogRef = inject(MatDialogRef<DialogoComponentComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  // readonly animal = model(this.data.);

  onNoClick(): void {
    this.dialogRef.close();
  }

}
