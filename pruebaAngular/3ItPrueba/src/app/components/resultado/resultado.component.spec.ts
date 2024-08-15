import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultadoComponent } from './resultado.component';
import { ServiceEncuestaService } from '../../service/service-encuesta.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('ResultadoComponent', () => {
  let component: ResultadoComponent;
  let fixture: ComponentFixture<ResultadoComponent>;
  let mockService: jasmine.SpyObj<ServiceEncuestaService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('ServiceEncuestaService', ['buscarResultados']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ResultadoComponent],
      providers: [
        { provide: ServiceEncuestaService, useValue: mockService },
        { provide: Router, useValue: mockRouter }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load data on ngOnInit', () => {
    const mockData = { 'Rock': 10, 'Pop': 5, 'Clásica': 3 };
    mockService.buscarResultados.and.returnValue(of(mockData));

    component.ngOnInit();

    expect(mockService.buscarResultados).toHaveBeenCalled();
    expect(component.chartLabels).toEqual(['Rock', 'Pop', 'Clásica']);
    expect(component.chartData).toEqual([10, 5, 3]);
    expect(component.dataSource.length).toBe(3);
  });

  it('should navigate on volver()', () => {
    component.volver();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  });
});
