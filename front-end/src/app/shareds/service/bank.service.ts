import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponsePageable} from '../model/responsePageable.model';
import {BankModel} from '../model/bank.model';

@Injectable({ providedIn: 'root' })
export class BankService {

  apiUrl = 'http://localhost:8080/banks';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) {}

  public getBanks(): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl);
  }

  public postBanks(bank: any): Observable<BankModel> {
    return this.httpClient.post<any>(this.apiUrl, bank, this.httpOptions);
  }

}
