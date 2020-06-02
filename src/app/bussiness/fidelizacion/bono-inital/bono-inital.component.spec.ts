import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonoInitalComponent } from './bono-inital.component';

describe('BonoInitalComponent', () => {
  let component: BonoInitalComponent;
  let fixture: ComponentFixture<BonoInitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonoInitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonoInitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
