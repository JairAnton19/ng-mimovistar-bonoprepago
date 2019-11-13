import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { BonoDetailComponent } from './bono-detail.component';

describe('BonoDetailComponent', () => {
  let component: BonoDetailComponent;
  let fixture: ComponentFixture<BonoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // RouterTestingModule.withRoutes([]),
      ],
      declarations: [ BonoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
