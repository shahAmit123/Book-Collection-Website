import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params} from '@angular/router';
import { Location } from '@angular/common';
import {Book} from '../books';
import { AppComponent } from '../app.component';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  // book which is selected from the list of books to get "Add" page
  book : Book;

  // id of book which is selected from booklist page
  id : number;


  constructor(private route : ActivatedRoute,
    private api : ApiService,
    private location : Location) {
      this.getOneBook();
    }
  
  // function which assign the selected book to the "this.book" object using "id" which was passed by routing
  getOneBook(){

    // assigning the id which is passed by routing in the booklist page to "this.id" object 
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.api.getOneBook(this.id).subscribe(
      data => {
        this.book = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  // function to update book in the list of books
  updateBook(){
    this.api.updateBook(this.book).subscribe(
      data => {
        this.book = data;
      },
      error =>{
        console.log(error);
      }
    )
  }
  
  // function to delete the book from list of books on database
  deleteBook(){
    this.api.deleteBook(this.id).subscribe(
      data => {
        this.api.books.push(data);
      },
      error =>{
        console.log(error);
      }
    )
  }

  ngOnInit(){
    
  }
}
