import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card-option-subscribe',
  templateUrl: './card-option-subscribe.component.html',
  styleUrls: ['./card-option-subscribe.component.scss']
})
export class CardOptionSubscribeComponent implements OnInit {

  @Input("src") imgSrc: string = "";
  @Input() textCard: string = "";
  @Output() avancarEtapa: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  proximaEtapa(typeUser: string | null){
    this.avancarEtapa.emit({
      nextStepper: true,
      typeUser: typeUser
    });
  }

}
