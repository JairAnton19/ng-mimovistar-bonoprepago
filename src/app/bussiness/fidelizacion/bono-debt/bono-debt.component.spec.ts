import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonoDebtComponent } from './bono-debt.component';

describe('BonoDebtComponent', () => {
  let component: BonoDebtComponent;
  let fixture: ComponentFixture<BonoDebtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonoDebtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonoDebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
