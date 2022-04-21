import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { RequestPasswordReset } from "../models/request-password-reset";

@Injectable({
  providedIn: 'root'
})
export class RequestPasswordResetService {
  constructor(private http: HttpClient) { }

  requestPasswordReset(userCPF: RequestPasswordReset): Observable<boolean> {
    return this.http.patch<boolean>(`${environment.API}users/request-password-reset`, userCPF)
  }
}
