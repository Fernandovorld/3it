import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncuestaComponent } from './encuesta.component';
import { MatDialog } from '@angular/material/dialog';
import { ServiceEncuestaService } from '../../service/service-encuesta.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('EncuestaComponent', () => {
  let component: EncuestaComponent;
  let fixture: ComponentFixture<EncuestaComponent>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let mockService: jasmine.SpyObj<ServiceEncuestaService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);
    mockService = jasmine.createSpyObj('ServiceEncuestaService', ['getDato', 'insertDato']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [EncuestaComponent],
      providers: [
        { provide: MatDialog, useValue: mockDialog },
        { provide: ServiceEncuestaService, useValue: mockService },
        { provide: Router, useValue: mockRouter }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call services on ngOnInit', () => {
    mockService.getDato.and.returnValue(of({}));
    component.ngOnInit();
    expect(mockService.getDato).toHaveBeenCalled();
  });

  it('should save data and open dialog on guardar()', () => {
    component.emailFormControl.setValue('test@example.com');
    component.selectedMusica = 'Rock';

    mockService.insertDato.and.returnValue(of({ respuesta: 'Success' }));
    component.guardar();

    expect(mockService.insertDato).toHaveBeenCalledWith(component.encuesta);
    expect(mockDialog.open).toHaveBeenCalled();
  });

  it('should navigate on volver()', () => {
    component.volver();
    expect(mockRouter.navigate).toHaveBeenCalled();
  });
});
