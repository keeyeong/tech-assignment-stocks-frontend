import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Stock } from './stock.shared';

@Injectable()
export class StockService {
  constructor(private http: HttpClient) {
  }

  public getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>("http://localhost:8484/api/stocks");
  }
}
