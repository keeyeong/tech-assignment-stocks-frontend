import { Component, OnInit } from '@angular/core';
import { StockService } from './stock.service';
import { Stock } from './stock.shared';

@Component({
  selector: 'app-stock-component',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stocks: Stock[];

  constructor(private service: StockService) {
  }

  ngOnInit() {
    this.service.getStocks().subscribe(x => {
      this.stocks = x;
    });
  }
}
