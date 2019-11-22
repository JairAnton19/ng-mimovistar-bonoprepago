import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CanjedBonusComponent } from './canjed-bonus.component';
import { DetectedPlatform } from '../../../commons/services/detectedPlatform';

describe('CanjedBonusComponent', () => {
  let component: CanjedBonusComponent;
  let fixture: ComponentFixture<CanjedBonusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ CanjedBonusComponent ],
      providers: [DetectedPlatform]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanjedBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Cuando llamo la funcion', () => {
    it('linkrouters', () => {
      expect(component.linkRouter('/ruta')).toString();
    });
  });

  describe('Cuando llamo la funcion', () => {
    it('linkrouter', () => {
      expect(component.linkRouters('/ruta')).toEqual(true);
    });
  });

  describe('Cuando llamo la funcion', () => {
    it('linkrouter', () => {
      expect(component.existBono()).toEqual(true);
    });
  });
});
