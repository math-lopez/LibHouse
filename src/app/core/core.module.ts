import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LoginComponent,
    SubscribeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [],
  providers: []
})
export class CoreModule { }
