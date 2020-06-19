import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoricComponent } from './views/historic/historic.component';
import { HomeComponent } from './views/home/home.component';
import { InputTransactionComponent } from './views/input-transaction/input-transaction.component';
import { OutputTransactionComponent } from './views/output-transaction/output-transaction.component';
import { TransferTransactionComponent } from './views/transfer-transaction/transfer-transaction.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { InputTransactionFutureComponent } from './views/input-transaction-future/input-transaction-future.component';
import { TransactionListComponent } from './views/home/transaction-list/transaction-list.component';
import { BalancesComponent } from './views/home/balances/balances.component';
import {MatCardModule} from '@angular/material/card';
import { InputBankComponent } from './views/input-bank/input-bank.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HistoricComponent,
    HomeComponent,
    InputTransactionComponent,
    OutputTransactionComponent,
    TransferTransactionComponent,
    InputTransactionFutureComponent,
    TransactionListComponent,
    BalancesComponent,
    InputBankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
