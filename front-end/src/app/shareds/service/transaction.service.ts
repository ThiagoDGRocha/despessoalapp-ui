import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponsePageable} from '../model/responsePageable.model';
import {TransactionModel} from '../model/transaction.model';

@Injectable({ providedIn: 'root' })
export class TransactionService {

  apiUrl = 'http://localhost:8080/transactions';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) {}

  public getTransactions(): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl);
  }

  public postTransactions(transaction: any): Observable<TransactionModel> {
    return this.httpClient.post<any>(this.apiUrl, transaction, this.httpOptions);
  }
}
