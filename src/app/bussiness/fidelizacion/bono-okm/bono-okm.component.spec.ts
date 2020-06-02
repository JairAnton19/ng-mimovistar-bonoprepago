import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonoOkmComponent } from './bono-okm.component';

describe('BonoOkmComponent', () => {
  let component: BonoOkmComponent;
  let fixture: ComponentFixture<BonoOkmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonoOkmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonoOkmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
