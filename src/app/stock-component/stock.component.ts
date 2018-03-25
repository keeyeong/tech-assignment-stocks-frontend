import { Component, OnInit } from '@angular/core';
import { StockService } from './stock.service';
import { Stock } from './stock.shared';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-stock-component',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  // stocks: Stock[];
  stocksDataSource: MatTableDataSource<Stock> = new MatTableDataSource();
  columnsToDisplay: string[] = ['stockName', 'stockPrice', 'lastUpdate'];

  constructor(private service: StockService) {
  }

  ngOnInit() {
    this.service.getStocks().subscribe(x => this.stocksDataSource.data = x);
  }
}
