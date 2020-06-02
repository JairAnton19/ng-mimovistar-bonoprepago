import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonoCanjedComponent } from './bono-canjed.component';

describe('BonoCanjedComponent', () => {
  let component: BonoCanjedComponent;
  let fixture: ComponentFixture<BonoCanjedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonoCanjedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonoCanjedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
