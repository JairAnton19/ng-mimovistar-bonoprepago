import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonoTechnicalComponent } from './bono-technical.component';

describe('BonoTechnicalComponent', () => {
  let component: BonoTechnicalComponent;
  let fixture: ComponentFixture<BonoTechnicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonoTechnicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonoTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
