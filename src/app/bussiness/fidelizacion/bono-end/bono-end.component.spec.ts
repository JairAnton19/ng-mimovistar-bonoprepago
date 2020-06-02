import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonoEndComponent } from './bono-end.component';

describe('BonoEndComponent', () => {
  let component: BonoEndComponent;
  let fixture: ComponentFixture<BonoEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonoEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonoEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
