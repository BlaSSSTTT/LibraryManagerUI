import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/Book';

@Component({
  selector: 'app-authors',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit {
  authors: string[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.fetchAuthors();
  }

  fetchAuthors(): void {
    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.authors = [...new Set(books.map((book) => book.author))];
    });
  }
}
