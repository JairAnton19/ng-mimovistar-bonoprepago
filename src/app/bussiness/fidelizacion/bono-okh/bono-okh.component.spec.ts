import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonoOkhComponent } from './bono-okh.component';

describe('BonoOkhComponent', () => {
  let component: BonoOkhComponent;
  let fixture: ComponentFixture<BonoOkhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonoOkhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonoOkhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
