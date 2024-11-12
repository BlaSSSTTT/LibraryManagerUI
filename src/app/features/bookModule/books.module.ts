import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HospitalRoutingModule } from './books-routing.module';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';
import { BooksComponent } from './components/books/books.component';
import { BooksModalComponent } from './components/books/books-modal/books-modal.component';
import { AuthorComponent } from './components/author/author.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    BooksComponent,
    BooksModalComponent,
    AuthorComponent,
    HighlightDirective,
  ],
  imports: [CommonModule, FormsModule, HospitalRoutingModule],
})
export class BooksModule {}
