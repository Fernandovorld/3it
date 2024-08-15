import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServiceEncuestaService } from './service-encuesta.service';
import { PruebaServiceService } from './prueba-service.service';
import { Encuesta } from '../class/encuesta';

describe('ServiceEncuestaService', () => {
  let service: ServiceEncuestaService;
  let pruebaService: PruebaServiceService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServiceEncuestaService, PruebaServiceService]
    });
    service = TestBed.inject(ServiceEncuestaService);
    pruebaService = TestBed.inject(PruebaServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getQuery() from PruebaServiceService with getDato()', () => {
    spyOn(pruebaService, 'getQuery');

    service.getDato();

    expect(pruebaService.getQuery).toHaveBeenCalledWith('api/controllers');
  });

  it('should call putQuery() from PruebaServiceService with insertDato()', () => {
    const mockEncuesta: Encuesta = <Encuesta>{ /* mock data */ };
    spyOn(pruebaService, 'putQuery');

    service.insertDato(mockEncuesta);

    expect(pruebaService.putQuery).toHaveBeenCalledWith('api/insertar', mockEncuesta);
  });

  it('should call getQuery() from PruebaServiceService with buscarResultados()', () => {
    spyOn(pruebaService, 'getQuery');

    service.buscarResultados();

    expect(pruebaService.getQuery).toHaveBeenCalledWith('api/total');
  });
});
