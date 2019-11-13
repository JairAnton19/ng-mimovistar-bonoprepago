import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InitialComponent } from './initial.component';

describe('InitialComponent', () => {
  let component: InitialComponent;
  let fixture: ComponentFixture<InitialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ InitialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  describe('Cuando llamo la funcion', () => {
      it('buttonclases',()=>{
        const checked: boolean = false;
        expect(component.buttonClases(checked)).toEqual(['tdp-button-opaque'])
      })
      it('buttonclases',()=>{
        const checked: boolean = true;
        expect(component.buttonClases(checked)).toEqual(['tdp-button'])
      })
  })

  describe('Cuando llamo la funcion', () => {
    it('linkrouter', () => {
      expect(component.linkRouter('/ruta')).toString()
    })
  })

  describe('Cuando llamo la funcion', () => {
    it('senData', () => {
      expect(component.sendData(true)).toString()
    })
  })

  describe('Cuando llamo la funcion', () => {
    it('selectedBono', () => {
      expect(component.selectedBono(0)).toEqual({checked:true,name:"Minutos ilimitados",type:'call'})
    })
  })

    


});
