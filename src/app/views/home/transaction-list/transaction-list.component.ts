import { Component, OnInit } from '@angular/core';
import {TransactionModel} from '../../../shareds/model/transaction.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: TransactionModel[] = [
    {bank: 'Itaú', debCred: 'deb', description: 'niver', operation: 'SAI', operationDate: '11/06/2020', value: '52.2'},
    {bank: 'Itaú', debCred: 'deb', description: 'niver', operation: 'SAI', operationDate: '11/06/2020', value: '52.2'},
    {bank: 'Itaú', debCred: 'deb', description: 'niver', operation: 'SAI', operationDate: '11/06/2020', value: '52.2'},
    {bank: 'Itaú', debCred: 'deb', description: 'niver', operation: 'SAI', operationDate: '11/06/2020', value: '52.2'},
    {bank: 'Itaú', debCred: 'deb', description: 'niver', operation: 'SAI', operationDate: '11/06/2020', value: '52.2'},
    {bank: 'Itaú', debCred: 'deb', description: 'niver', operation: 'SAI', operationDate: '11/06/2020', value: '52.2'}];

  constructor() { }

  ngOnInit(): void {
  }

}
