import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { handleErrorLogin } from 'src/app/shared/utilities/handle-error-login';
import { AuthenticationService } from '../../services/authentication.service';
import { Error } from "../../../shared/models/errors";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription[] = [];

  formLogin = new FormGroup({});
  confirmSuccess: boolean | null | undefined = false;
  userEmail: string | null | undefined;
  userId: string | null | undefined;
  previousUrl: string | null | undefined;
  errorReturn: Error | null = null;

  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router,
    private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParamsRouteLogin();
    this.criarFormulario();
  }

  logar() {
    if (this.formLogin.valid) {
      const { email, password } = this.formLogin.value;

      this.subscription.push(
        this.authService.authentication({email, password})
        .subscribe({
          next: () =>  {
            this.redirectRoute('/')
          },
          complete: () => {},
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
      this.activedRoute.paramMap.subscribe(paraMap => {
        this.userEmail = paraMap.get('userEmail');
        this.userId = paraMap.get('userId');
        this.confirmSuccess = paraMap.get('confirmSuccess') === 'true' ? true : false;

        if (this.userEmail && this.userId) {
          this.authService.emailConfirmation(this.userEmail, this.userId).subscribe(confirm => {
            this.router.navigateByUrl(`login/${confirm}`)
          });
        }

        if (this.confirmSuccess) {
          this.redirectRoute('login')
        }
      }));
  }

  private criarFormulario() {
    this.formLogin = this.fb.group({
      "email": [null, [Validators.required, Validators.email]],
      "password": [null, [Validators.required, Validators.minLength(6)]]
    });
  }
}
