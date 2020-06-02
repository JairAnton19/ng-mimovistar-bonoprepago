import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonoMaxComponent } from './bono-max.component';

describe('BonoMaxComponent', () => {
  let component: BonoMaxComponent;
  let fixture: ComponentFixture<BonoMaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonoMaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonoMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
