import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PruebaServiceService } from './prueba-service.service';

describe('PruebaServiceService', () => {
  let service: PruebaServiceService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PruebaServiceService]
    });
    service = TestBed.inject(PruebaServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request with getQuery()', () => {
    const query = 'example';
    const mockResponse = { data: 'example data' };

    service.getQuery(query).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(`http://localhost:8080/${query}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should make a PUT request with putQuery()', () => {
    const query = 'example';
    const mockBody = { key: 'value' };
    const mockResponse = { message: 'success' };

    service.putQuery(query, mockBody).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(`http://localhost:8080/${query}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(mockBody);
    req.flush(mockResponse);
  });
});
