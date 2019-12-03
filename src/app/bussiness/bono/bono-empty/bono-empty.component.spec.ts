import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonoEmptyComponent } from './bono-empty.component';

describe('BonoEmptyComponent', () => {
  let component: BonoEmptyComponent;
  let fixture: ComponentFixture<BonoEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonoEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonoEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
