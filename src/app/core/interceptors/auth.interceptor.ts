import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable} from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService, private tokenService: TokenStorageService, private route: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("TESTE")
    const user = this.tokenService.getUser();
    console.log(user)
    if(user){
      if(user.expiresInAccessToken.getTime() < new Date().getTime()){
        this.authService.refreshToken(user.accessToken, user.refreshToken).subscribe({
          next: res => {
            if(res){
              this.authService.userData = res;
              return next.handle(request);
            }
          },
          error: err => {}
        })
      }
    }

    this.route.navigateByUrl("login");
    return next.handle(request);
  }
}
