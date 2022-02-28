import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDataComponent } from './components/subscribe/user-data/user-data.component';
import { PersonalDataComponent } from './components/subscribe/personal-data/personal-data.component';
import { CardOptionSubscribeComponent } from './components/subscribe/card-option-subscribe/card-option-subscribe.component';



@NgModule({
  declarations: [
    LoginComponent,
    SubscribeComponent,
    UserDataComponent,
    PersonalDataComponent,
    CardOptionSubscribeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [],
  providers: []
})
export class CoreModule { }
