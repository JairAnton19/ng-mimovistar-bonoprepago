import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanjedBonusComponent } from './canjed-bonus.component';

describe('CanjedBonusComponent', () => {
  let component: CanjedBonusComponent;
  let fixture: ComponentFixture<CanjedBonusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanjedBonusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanjedBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
