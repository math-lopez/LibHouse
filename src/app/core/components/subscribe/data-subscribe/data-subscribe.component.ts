import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-data-subscribe',
  templateUrl: './data-subscribe.component.html',
  styleUrls: ['./data-subscribe.component.scss']
})
export class DataSubscribeComponent implements OnInit {
  @ViewChild('stepper') myStepper: MatStepper | undefined;
  formSubscribe = new FormGroup({})
  isLinear = false;

  constructor(private fb: FormBuilder, private subscribeService: SubscribeService) { }

  ngOnInit(): void {
  }

  proximaEtapa(command: any | null){
    if(command?.UserType != null){
      this.formSubscribe = this.fb.group({
        ...command?.userForm?.controls,
        ...command?.personalForm?.controls,
        ...this.formSubscribe.controls,
        "UserType": [command.UserType]
      });
    }else{
      this.formSubscribe = this.fb.group({
        ...command?.userForm?.controls,
        ...command?.personalForm?.controls,
        ...this.formSubscribe.controls,
        "UserType": null
      });
      if(command.finish){
        this.cadastrar()
      }
    }
    command.nextStepper ? this.myStepper?.next() : null;
  }

  cadastrar(){
    this.subscribeService.subscribe(this.formSubscribe.value)
  }
}
