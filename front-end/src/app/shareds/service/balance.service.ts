@Injectable({ providedIn: 'root' })
export class BalanceService {

  apiUrl = 'http://localhost:8080/balances';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) {}

  public getBalances(): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl);
  }
}
