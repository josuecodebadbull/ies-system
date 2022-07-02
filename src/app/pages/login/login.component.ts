import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  messageLogin: string = '';
  loading: boolean = false;
  readonly UnSuscribe: Subject<void> = new Subject<void>();
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  private navegateToDasboard() {
    this.router.navigate(['']);
  }


  login() {
    const { loginForm, UnSuscribe, authService } = this;
    const that = this;
    that.messageLogin = '';
    that.loading = true;
    if (loginForm.valid) {
      const body = { ...loginForm.value };
      authService
        .login(body)
        .pipe(takeUntil(UnSuscribe))
        .subscribe(
          {
            //TODO respuesta correcta de acceso
            next(x) {
              loginForm.reset();
              that.navegateToDasboard();
            },
            error(err) {
              const { error: { mensaje } } = err;
              that.messageLogin = mensaje;
              that.loading = false;
            },
            complete() {
              that.loading = false;
            }
          }
        );
    }
  }

}
