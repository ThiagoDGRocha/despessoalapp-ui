import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BankService } from '../../shareds/service/bank.service';

@Component({
  selector: 'app-input-bank',
  templateUrl: './input-bank.component.html',
  styleUrls: ['./input-bank.component.css']
})
export class InputBankComponent implements OnInit {
  public bankForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<InputBankComponent>,
    private fb: FormBuilder,
    private rest: BankService
  ) { }

  ngOnInit(): void {
    this.bankForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  createBank(){
    console.log(this.bankForm.value);
    this.rest.postBanks(this.bankForm.value).subscribe(result => {});
    this.dialogRef.close(true);
    this.bankForm.reset();
  }

  cancel(){
    this.dialogRef.close(true);
    this.bankForm.reset();
  }

}
