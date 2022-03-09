import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper | undefined;
  formSubscribe = new FormGroup({})
  isLinear = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {}

  proximaEtapa(command: any | null){
    if(command?.typeUser != null){
      this.formSubscribe = this.fb.group({
        ...command?.userForm?.controls,
        ...command?.personalForm?.controls,
        ...this.formSubscribe.controls,
        "typeUser": [command.typeUser]
      });
    }else{
      this.formSubscribe = this.fb.group({
        ...command?.userForm?.controls,
        ...command?.personalForm?.controls,
        ...this.formSubscribe.controls
      });
      if(command.finish){
        this.cadastrar()
      }
    }
    console.log(this.formSubscribe)
    command.nextStepper ? this.myStepper?.next() : null;
  }

  etapaAnterior(command: any | null){
    this.formSubscribe = this.fb.group({
      ...command?.userForm.controls,
      ...command?.personal.controls,
      ...this.formSubscribe.controls
    });
    if(command.previousStepper) {
      this.myStepper?.previous()
    }
  }

  cadastrar(){
    console.log(this.formSubscribe)
  }

}
