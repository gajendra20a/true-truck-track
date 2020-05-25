import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckTopComponent } from './truck-top.component';

describe('TruckTopComponent', () => {
  let component: TruckTopComponent;
  let fixture: ComponentFixture<TruckTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
