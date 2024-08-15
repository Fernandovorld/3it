import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        { provide: Router, useValue: mockRouter }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to encuesta on calling encuesta()', () => {
    component.encuesta();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/encuesta']);
  });

  it('should navigate to resultado on calling resultado()', () => {
    component.resultado();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/resultado']);
  });
});
