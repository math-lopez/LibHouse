import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { UserDataComponent } from './components/subscribe/user-data/user-data.component';
import { PersonalDataComponent } from './components/subscribe/personal-data/personal-data.component';
import { CardOptionSubscribeComponent } from './components/subscribe/card-option-subscribe/card-option-subscribe.component';
import {MatIconModule} from '@angular/material/icon';



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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  exports: [],
  providers: []
})
export class CoreModule { }
