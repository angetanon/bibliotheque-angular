import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';


@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {
  book: Book;

  constructor(private router: Router, private booksService: BooksService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.book = new Book('', '');
    const id = this.route.snapshot.params['id'];
    this.booksService.getSingleBook(+id).then(
      (book: Book) => {
        this.book = book;
      }
    );
  }

  onBack() {
    this.router.navigate(['/books']);
  }
}
