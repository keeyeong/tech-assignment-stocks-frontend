import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from './stock.shared';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class StockService {
  constructor(private http: HttpClient) {
  }

  public getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(environment.restUrlBase + '/stocks');
  }
}
