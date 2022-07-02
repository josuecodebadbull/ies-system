import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface SelectRange {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dates-calculator',
  templateUrl: './dates-calculator.component.html',
  styleUrls: ['./dates-calculator.component.scss']
})
export class DatesCalculatorComponent implements OnInit {

  dateForm: FormGroup
  dateFinal: any;

  ranges: SelectRange[] = [
    { value: 'day', viewValue: 'días' },
    { value: 'month', viewValue: 'meses' },
    { value: 'year', viewValue: 'años' }
  ];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.dateForm = this.fb.group({
      date: [null, Validators.required],
      unit: [null, Validators.required],
      quantity: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
    });
  }

  calculateDate(): void {
    if (this.dateForm.valid) {
      const { date, unit, quantity } = this.dateForm.value;
      const that = this;
      const d = new Date(date);

      if (unit === 'year') {
        that.dateFinal = d.setFullYear(date.getFullYear() + quantity);
      }

      if (unit === 'month') {
        that.dateFinal = d.setMonth(date.getMonth() + quantity);
      }

      if (unit === 'day') {
        that.dateFinal = d.setDate(date.getDate() + quantity);
      }
    }
  }

}
