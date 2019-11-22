import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorComponent } from './error.component';
import { DetectedPlatform } from '../../../commons/services/detectedPlatform';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ ErrorComponent ],
      providers: [DetectedPlatform]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Cuando llamo la funcion', () => {
    it('buttonclases', () => {
      expect(component.buttonClases()).toEqual(['tdp-button', 'fontAndroid']);
    });
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
