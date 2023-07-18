import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairdresserinfoComponent } from './hairdresserinfo.component';

describe('HairdresserinfoComponent', () => {
  let component: HairdresserinfoComponent;
  let fixture: ComponentFixture<HairdresserinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HairdresserinfoComponent]
    });
    fixture = TestBed.createComponent(HairdresserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
