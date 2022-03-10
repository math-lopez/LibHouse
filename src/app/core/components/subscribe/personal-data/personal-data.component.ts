import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  genders: Array<any> = [
    'masculino',
    'feminino',
    'outros'
  ];

  formPersonal = new FormGroup({});
  @Output() anterior: EventEmitter<any> = new EventEmitter<any>();
  @Output() proximo: EventEmitter<any> = new EventEmitter<any>();

  constructor(private aut: AuthenticationService, private fb: FormBuilder, private router: Router) {   }

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario(){
    this.formPersonal = this.fb.group({
      "nome": [null, [Validators.required]],
      "sobrenome": [null, [Validators.required]],
      "dataNascimento": [null, [Validators.required]],
      "genero": [null, [Validators.required]],
      "telefone": [null, [Validators.required]],
      "cpf": [null, [Validators.required]]
    });
  }

  voltarEtapa(){
    this.anterior.emit({
      personalForm: this.formPersonal,
      previousStepper: true
    });
  }

  proximaEtapa(){

    this.proximo.emit({
      personalForm: this.formPersonal,
      previousStepper: true,
      finish: true
    });
  }

}
