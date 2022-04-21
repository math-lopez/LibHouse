import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './components/login/login.module';
import { SubscribeModule } from './components/subscribe/subscribe.module';
import { ResetPasswordModule } from './components/reset-password/reset-password.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    ResetPasswordModule,
    SubscribeModule
  ]
})
export class CoreModule { }
