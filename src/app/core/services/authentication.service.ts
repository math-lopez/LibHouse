import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuthLogin } from '../components/login/models/auth-login'
import { ConfirmationEmail } from '../components/login/models/confimation-email';
import { IUserAuthentication } from '../components/login/models/user-authentication';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userLogged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userData: IAuthLogin | null = null;

  constructor(private http: HttpClient) { }

  authentication(usuario: IUserAuthentication): Observable<IAuthLogin> {
    return this.http.post<IAuthLogin>(`${environment.API}users/login`, usuario)
      .pipe(
        tap(user => {
          if (user !== null) {
            this.userLogged$.next(true);
            this.userData = user;
            localStorage.setItem('user', JSON.stringify(user));
          }
        })
      );
  }

  emailConfirmation(confirmationEmail: ConfirmationEmail): Observable<boolean> {
    return this.http.patch<boolean>(`${environment.API}users/confirm-registration`, {...confirmationEmail});
  }
}
