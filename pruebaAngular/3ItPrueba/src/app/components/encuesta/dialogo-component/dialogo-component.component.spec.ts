import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogoComponentComponent } from './dialogo-component.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('DialogoComponentComponent', () => {
  let component: DialogoComponentComponent;
  let fixture: ComponentFixture<DialogoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogoComponentComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog on calling onNoClick()', () => {
    spyOn(component.dialogRef, 'close');
    component.onNoClick();
    expect(component.dialogRef.close).toHaveBeenCalled();
  });
});
