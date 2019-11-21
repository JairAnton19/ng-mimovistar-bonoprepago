import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CanjedBonusComponent } from './canjed-bonus.component';
import { DetectedPlatform } from './../../functions/detectedPlatform';

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
<<<<<<< HEAD
    it('buttonclases',()=>{
      expect(component.buttonClases()).toEqual(['tdp-button','fontAndroid'])
    })
  })
=======
    it('linkrouters', () => {
      expect(component.linkRouter('/ruta')).toString();
    });
  });
>>>>>>> cfafcee26a70d4f2caf91717c83b24eb09b586d6

  describe('Cuando llamo la funcion', () => {
    it('linkrouter', () => {
      expect(component.linkRouters('/ruta')).toEqual(true)
    })
  })

  describe('Cuando llamo la funcion', () => {
    it('linkrouter', () => {
      expect(component.existBono()).toEqual(true)
    })
  })

  // describe('Cuando llamo la funcion', () => {
  //   it('linkrouters', () => {
  //     expect(component.linkRouter('/ruta')).toString()
  //   })
  // })

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
