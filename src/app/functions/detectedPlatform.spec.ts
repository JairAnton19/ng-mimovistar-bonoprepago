import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DetectedPlatform } from './detectedPlatform';

describe('DetectedPlatform', () => {
    let component: DetectedPlatform;
    let fixture: ComponentFixture<DetectedPlatform>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        DetectedPlatform
      ],
    }).compileComponents();
  }));

   describe('Cuando llamo la funcion', () => {
    it('senData', () => {
      expect(component.detectPlatform()).toString()
    })
  })

});
