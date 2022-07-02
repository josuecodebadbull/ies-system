import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';
import { CustomerValidators } from './directives/space.directive';
import { FormService } from './services/form.service';

interface Books {
  name: string;
}

interface MaritalStatus {
  name: string;
  value: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  books: Books[] = [];
  maritalCatalog: MaritalStatus[] = [];
  readonly UnSuscribe: Subject<void> = new Subject<void>();
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private fb: FormBuilder,
    private formServices: FormService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      nombres: [null, [Validators.required, CustomerValidators.spaceValidation]],
      apellidos: [null, [Validators.required, CustomerValidators.spaceValidation]],
      fumas: [false, Validators.required],
      actualmentePracticasLectura: [false, Validators.required],
      nombreLibro: [null],
      estadoCivil: [null],
    });

    this.getCatalog();


  }

  getCatalog() {
    const { UnSuscribe, formServices } = this;
    const that = this;
    formServices
      .getCatalogFake()
      .pipe(takeUntil(UnSuscribe))
      .subscribe(
        {
          next(x: any) {
            that.maritalCatalog = x;
          },
          error(err) {
            const { error: { mensaje } } = err;
          }
        }
      );
  }

  checkForm(): void {
    if (this.form.valid) {
      this._snackBar.open('Formulario correcto 🎉 🎉 🎉 🎉', 'x', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    } else {
      this._snackBar.open('UPS ALGO FALLO!!!! 🤯 🤯 🤯 🤯', 'x', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
    this.form.markAllAsTouched();
  }

  addBook(): void {
    const book = this.form.value.nombreLibro;
    this.form.get('nombreLibro')?.reset();
    this.books = (book !== null || book === '') ? [...this.books, book] : this.books;
  }

}
