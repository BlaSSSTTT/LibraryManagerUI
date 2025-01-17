import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BooksModule } from './features/bookModule/books.module';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, DateFormatPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
