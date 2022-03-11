import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ComparePassword } from 'src/app/shared/validators/ComparePassword';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  @Output() anterior: EventEmitter<any> = new EventEmitter<any>();
  @Output() proximo: EventEmitter<any> = new EventEmitter<any>();

  private subscription: Subscription[] = [];

  formUser = new FormGroup({});

  hideConfirmPassword: boolean = true;
  hidePassword: boolean = true;

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
      "password": [null, [Validators.required, Validators.minLength(6), ]],
      "confirmPassword": [null, [Validators.required, Validators.minLength(6)]]
    },
    {
      validators: ComparePassword("password", "confirmPassword")
    }
    );
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
