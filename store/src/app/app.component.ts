import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Book } from './books';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ApiService],
})


export class AppComponent {
  books : Book[];
  constructor(private api : ApiService){
    this.getBooks();
  }

  // essential
  getBooks = () => {
      this.api.getAllBooks().subscribe(
        data => {
          this.books = data;
        },
        error => {
          console.log(error);
        }       
      );
  }
 
} 
