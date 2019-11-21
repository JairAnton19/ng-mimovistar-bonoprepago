import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InitialComponent } from './initial.component';
import { DetectedPlatform } from './../../functions/detectedPlatform';

describe('InitialComponent', () => {
  let component: InitialComponent;
  let fixture: ComponentFixture<InitialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ InitialComponent ],
      providers: [DetectedPlatform]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  describe('Cuando llamo la funcion', () => {
<<<<<<< HEAD
      it('buttonclases',()=>{
        const checked: boolean = false;
        expect(component.buttonClases(checked)).toEqual(['tdp-button-opaque','fontAndroid'])
      })
      it('buttonclases',()=>{
        const checked: boolean = true;
        expect(component.buttonClases(checked)).toEqual(['tdp-button','fontAndroid'])
      })
  })

  describe('Cuando llamo la funcion', () => {
    it('linkrouter', () => {
      expect(component.linkRouter('/ruta')).toEqual(true)
    })
  })

  describe('Cuando llamo la funcion', () => {
    it('senData', () => {
      expect(component.sendData(true)).toEqual(true)
    })
  })

  describe('Cuando llamo la funcion', () => {
    it('selectedBono', () => {
      expect(component.selectedBono(0)).toEqual({checked:true,name:"Llamadas ilimitadas a todo <span class='labelNegrita'>Movistar</span> por 1 día",type:'call'})
    })
  })

    

=======
      it('buttonclases', () => {
        const checked: boolean;
        expect(component.buttonClases(checked)).toEqual(['tdp-button-opaque']);
      });
      it('buttonclases', () => {
        const checked: boolean;
        expect(component.buttonClases(checked)).toEqual(['tdp-button']);
      });
  });

  describe('Cuando llamo la funcion', () => {
    it('linkrouter', () => {
      expect(component.linkRouter('/ruta')).toString();
    });
  });

  describe('Cuando llamo la funcion', () => {
    it('senData', () => {
      expect(component.sendData(true)).toString();
    });
  });

  describe('Cuando llamo la funcion', () => {
    it('selectedBono', () => {
      expect(component.selectedBono(0)).toEqual({checked: true, name: 'Minutos ilimitados', type: 'call'});
    });
  });
>>>>>>> cfafcee26a70d4f2caf91717c83b24eb09b586d6

});
