import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {

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
      "nome": [null, [Validators.required]],
      "sobrenome": [null, [Validators.required, Validators.minLength(6)]],
      "dataNascimento": [null, [Validators.required]],
      "genero": [null, [Validators.required]],
      "telefone": [null, [Validators.required]],
      "cpf": [null, [Validators.required]]
    });
  }

}
