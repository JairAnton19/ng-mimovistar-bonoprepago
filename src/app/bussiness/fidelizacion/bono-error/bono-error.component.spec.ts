import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonoErrorComponent } from './bono-error.component';

describe('BonoErrorComponent', () => {
  let component: BonoErrorComponent;
  let fixture: ComponentFixture<BonoErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonoErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonoErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
