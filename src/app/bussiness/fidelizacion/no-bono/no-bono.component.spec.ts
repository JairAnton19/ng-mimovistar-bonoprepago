import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoBonoComponent } from './no-bono.component';

describe('NoBonoComponent', () => {
  let component: NoBonoComponent;
  let fixture: ComponentFixture<NoBonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoBonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoBonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
