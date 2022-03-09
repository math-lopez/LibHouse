import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Subscription, switchMap, tap } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription[] = [];

  formLogin = new FormGroup({});

  constructor(private aut: AuthenticationService, private fb: FormBuilder, private router: Router) {   }

  ngOnInit(): void {
    this.criarFormulario();
  }

  logar() {
    if (!this.formLogin.valid) {
      return;
    }
    console.log(this.formLogin.value);
  }

  criarFormulario(){
    this.formLogin = this.fb.group({
      "email": [null, [Validators.required, Validators.email]],
      "password": [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  subscribe(){
    this.router.navigateByUrl('subscribe')
  }
}
