import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DetectedPlatform } from '../../../commons/services/detectedPlatform';
import { BonoDetailComponent } from './bono-detail.component';

describe('BonoDetailComponent', () => {
  let component: BonoDetailComponent;
  let fixture: ComponentFixture<BonoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ BonoDetailComponent ],
      providers: [ DetectedPlatform]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Cuando llamo la funcion', () => {
    it('buttonclases', () => {
      expect(component.buttonClases()).toString();
    });
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
