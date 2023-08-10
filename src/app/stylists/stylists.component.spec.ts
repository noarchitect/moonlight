import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylistsComponent } from './stylists.component';

describe('StylistsComponent', () => {
  let component: StylistsComponent;
  let fixture: ComponentFixture<StylistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StylistsComponent]
    });
    fixture = TestBed.createComponent(StylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
