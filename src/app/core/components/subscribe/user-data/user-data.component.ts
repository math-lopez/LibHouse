import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  private subscription: Subscription[] = [];

  formUser = new FormGroup({});
  @Output() anterior: EventEmitter<any> = new EventEmitter<any>();
  @Output() proximo: EventEmitter<any> = new EventEmitter<any>();

  constructor(private aut: AuthenticationService, private fb: FormBuilder, private router: Router) {   }

  ngOnInit(): void {
    this.criarFormulario();
  }

  logar() {
    if (!this.formUser.valid) {
      return;
    }
    this.proximaEtapa();
  }

  criarFormulario(){
    this.formUser = this.fb.group({
      "email": [null, [Validators.required, Validators.email]],
      "senha": [null, [Validators.required, Validators.minLength(6), ]],
      "confirmacaoSenha": [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  voltarEtapa(){
    this.anterior.emit({
      userForm: this.formUser,
      previousStepper: true
    });
  }

  proximaEtapa(){
    this.proximo.emit({
      userForm: this.formUser,
      nextStepper: true
    });
  }

}
