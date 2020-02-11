import { Component, OnInit } from '@angular/core';
import { Book } from '../books';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers : [ApiService]
})
export class AddComponent implements OnInit {

  // object of Book class which will be inserted into list of books
  book : Book;

  constructor(private api : ApiService) {
    // initializing the book object
    this.book = {
      id:-1 , title: '',author : '' , genre : '', height : 0, publisher : ''
    }
   }

  ngOnInit() { }
  
  createBook  = () => {       
    
    // inserting the book object to the list of books 
    this.api.createBook(this.book).subscribe(
      data => {
        this.api.books.push(data);
      },
      error => {
        console.log(error);
      }
    )
  }
}
