import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoricComponent } from './views/historic/historic.component';
import { HomeComponent } from './views/home/home.component';
import { InputComponent } from './views/input/input.component';
import { OutputComponent } from './views/output/output.component';
import { TransferComponent } from './views/transfer/transfer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { InputFutureComponent } from './views/input-future/input-future.component';
import { TransactionListComponent } from './views/home/transaction-list/transaction-list.component';
import { BalancesComponent } from './views/home/balances/balances.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HistoricComponent,
    HomeComponent,
    InputComponent,
    OutputComponent,
    TransferComponent,
    InputFutureComponent,
    TransactionListComponent,
    BalancesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
