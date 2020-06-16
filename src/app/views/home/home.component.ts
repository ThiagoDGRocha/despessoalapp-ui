import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {InputBankComponent} from '../input-bank/input-bank.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addBank(): void {
    const dialogRef = this.dialog.open(InputBankComponent, {
      maxHeight: '95vh',
      minWidth: '400px',
      width: '25vw',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
