import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesCalculatorComponent } from './dates-calculator.component';

describe('DatesCalculatorComponent', () => {
  let component: DatesCalculatorComponent;
  let fixture: ComponentFixture<DatesCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatesCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatesCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
