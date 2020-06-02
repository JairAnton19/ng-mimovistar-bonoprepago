import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonoTermsComponent } from './bono-terms.component';

describe('BonoTermsComponent', () => {
  let component: BonoTermsComponent;
  let fixture: ComponentFixture<BonoTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonoTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonoTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
