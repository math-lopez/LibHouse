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
import { UserDataComponent } from './components/subscribe/data-subscribe/user-data/user-data.component';
import { PersonalDataComponent } from './components/subscribe/data-subscribe/personal-data/personal-data.component';
import { CardOptionSubscribeComponent } from './components/subscribe/data-subscribe/chose-perfil/card-option-subscribe/card-option-subscribe.component';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import { NgxMaskModule } from 'ngx-mask';
import { ChosePerfilComponent } from './components/subscribe/data-subscribe/chose-perfil/chose-perfil.component';
import { DataSubscribeComponent } from './components/subscribe/data-subscribe/data-subscribe.component';


@NgModule({
  declarations: [
    LoginComponent,
    SubscribeComponent,
    UserDataComponent,
    PersonalDataComponent,
    CardOptionSubscribeComponent,
    ChosePerfilComponent,
    DataSubscribeComponent
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
    MatIconModule,
    MatStepperModule,
    MatSelectModule,
    NgxMaskModule.forRoot()
  ],
  exports: [  ],
  providers: []
})
export class CoreModule { }
