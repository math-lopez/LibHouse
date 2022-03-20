import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './subscribe.component';
import { UserDataComponent } from './data-subscribe/user-data/user-data.component';
import { CardOptionSubscribeComponent } from './data-subscribe/chose-perfil/card-option-subscribe/card-option-subscribe.component';
import { ChosePerfilComponent } from './data-subscribe/chose-perfil/chose-perfil.component';
import { DataSubscribeComponent } from './data-subscribe/data-subscribe.component';
import { PersonalDataComponent } from './data-subscribe/personal-data/personal-data.component';
import { CoreModule } from '../../core.module';
import { SubscribeService } from './services/subscribe.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    SubscribeComponent,
    UserDataComponent,
    PersonalDataComponent,
    CardOptionSubscribeComponent,
    ChosePerfilComponent,
    DataSubscribeComponent
  ],
  imports: [
    CommonModule,
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
  providers: [
    SubscribeService
  ],
  exports: [
    SubscribeComponent
  ]
})
export class SubscribeModule { }
