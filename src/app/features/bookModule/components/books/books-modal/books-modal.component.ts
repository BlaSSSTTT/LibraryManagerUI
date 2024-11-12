import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../../../interfaces/Book';

@Component({
  selector: 'app-books-modal',
  templateUrl: './books-modal.component.html',
  styleUrls: ['./books-modal.component.scss'],
})
export class BooksModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  @Output() saveBook = new EventEmitter<Book>();

  book: Book = {id:0, title: '', author: '', genre: '',};

  onSave() {
    this.saveBook.emit(this.book);
    this.closeModal.emit();
  }
}
