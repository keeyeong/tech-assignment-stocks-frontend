import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StockComponent } from './stock-component/stock.component';
import { StockService } from './stock-component/stock.service';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
