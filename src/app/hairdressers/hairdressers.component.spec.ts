import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairdressersComponent } from './hairdressers.component';

describe('HairdressersComponent', () => {
  let component: HairdressersComponent;
  let fixture: ComponentFixture<HairdressersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HairdressersComponent]
    });
    fixture = TestBed.createComponent(HairdressersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
