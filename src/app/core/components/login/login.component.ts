import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription, tap } from 'rxjs';
import { handleErrorLogin } from 'src/app/shared/utilities/handle-error-login';
import { AuthenticationService } from '../../services/authentication.service';
import { Error } from "../../../shared/models/errors";
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private subscription: Subscription[] = [];

  formLogin = new FormGroup({});
  confirmSuccess: boolean | null | undefined = false;
  ConfirmationToken: string | null | undefined = null;
  UserEmail: string | null | undefined = null;
  UserId: string | null | undefined = null;
  previousUrl: string | null | undefined;
  errorReturn: Error | null = null;

  showFormTemplate = (this.ConfirmationToken === null || this.ConfirmationToken === undefined)
    && (this.UserEmail === null || this.UserEmail === undefined)
    && (this.UserId === null || this.UserId === undefined);

  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router,
    private activedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getParamsRouteLogin();
    this.criarFormulario();
  }

  logar() {
    if (this.formLogin.valid) {
      const { email, password } = this.formLogin.value;

      this.subscription.push(
        this.authService.authentication({ email, password })
          .subscribe({
            next: () => {
              this.redirectRoute('/')
            },
            complete: () => { },
            error: (err) => {
              this.errorReturn = handleErrorLogin(err)
            }
          }));
    }
  }

  redirectRoute(route: string) {
    this.router.navigateByUrl(route);
  }

  private getParamsRouteLogin(): void {
    this.subscription.push(
      this.activedRoute.paramMap
      .subscribe(paraMap => {
        this.UserEmail = paraMap.get('userEmail');
        this.ConfirmationToken = paraMap.get('tokenConfirmEmail');
        this.UserId = paraMap.get('userId');
        this.confirmSuccess = paraMap.get('confirmSuccess') === 'true' ? true : false;
        if (this.UserEmail && this.UserId && this.ConfirmationToken) {
          this.subscription.push(
            this.authService.emailConfirmation({ UserEmail: this.UserEmail, UserId: this.UserId, ConfirmationToken: this.ConfirmationToken})
              .subscribe(
                {
                  next: confirm => {
                    this.router.navigateByUrl(`login/${confirm}`)
                  },
                  error: err => this.handleErrosSubscribe(err)
                }
              ));
        }

        if (this.confirmSuccess) {
          this.redirectRoute('login')
        }
      }));
  }

  private handleErrosSubscribe(err: HttpErrorResponse) {
    let duration = 5;

    this.errorReturn = handleErrorLogin(err);
    this.showFormTemplate = false;
    this.subscription.push(
      this._snackBar.open('Erro ao confirmar email, entre em contato para resolução dos problemas', 'close', {
        duration: duration * 1000
      }).afterDismissed().subscribe(() => this.redirectRoute('login')));
  }

  private criarFormulario() {
    this.formLogin = this.fb.group({
      "email": [null, [Validators.required, Validators.email]],
      "password": [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subs => subs.unsubscribe);
  }
}
