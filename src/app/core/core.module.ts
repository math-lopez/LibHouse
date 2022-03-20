import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './components/login/login.module';
import { SubscribeModule } from './components/subscribe/subscribe.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    SubscribeModule
  ]
})
export class CoreModule { }
