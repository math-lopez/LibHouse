import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuthLogin } from '../components/login/models/auth-login'
import { IUserAuthentication } from '../components/login/models/user-authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userData: IAuthLogin | null = null;
  constructor(private http: HttpClient) { }

  authentication(usuario: IUserAuthentication): Observable<IAuthLogin> {
    return this.http.post<IAuthLogin>(`${environment.API}authentication`, usuario)
      .pipe(
        tap(user => {
          if (user !== null) {
            this.userLogged.next(true);
            this.userData = user;
          }
        })
      );
  }

  emailConfirmation(userEmail: string | null, userId: string | null): Observable<boolean> {
    return this.http.get<boolean>(`${environment.API}emailConfirmation/${userEmail}/${userId}`);
  }
}
