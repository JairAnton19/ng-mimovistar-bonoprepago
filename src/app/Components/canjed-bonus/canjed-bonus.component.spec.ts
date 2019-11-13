import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CanjedBonusComponent } from './canjed-bonus.component';

describe('CanjedBonusComponent', () => {
  let component: CanjedBonusComponent;
  let fixture: ComponentFixture<CanjedBonusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ CanjedBonusComponent ]
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
      expect(component.linkRouter('/ruta')).toString()
    })
  })

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
