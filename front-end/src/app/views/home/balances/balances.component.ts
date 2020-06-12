import { Component, OnInit } from '@angular/core';
import {BalanceModel} from '../../../shareds/model/balanceModel';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.css']
})
export class BalancesComponent implements OnInit {

  balances: BalanceModel[] = [
    {bank: 'Itaú', cred: '1500', deb: '200,0', crediteDate: '26/06/2020', updatedAt: '11/06/2020'},
    {bank: 'NuBank', cred: '750', deb: '50,0', crediteDate: '25/06/2020', updatedAt: '11/06/2020'},
    {bank: 'Carol', cred: '300', deb: '100,0', crediteDate: '01/07/2020', updatedAt: '11/06/2020'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
