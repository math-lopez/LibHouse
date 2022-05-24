import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TransactionComponent } from './components/transaction/transaction.component';



@NgModule({
  declarations: [TransactionComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [TransactionComponent]
})
export class SharedModule { }
