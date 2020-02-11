import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Book } from '../books';
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
  providers : [ApiService]
})
export class BooklistComponent implements OnInit {
  books : Book[];  //list of books in database
  
  filterValue : string ;
  constructor( private api : ApiService) {
    this.getBooks();   //to fetch data from database and insert into books list
   }

   // initializing selected fillter 
   selectedFilter : string = 'none';
   

   fun(selectedFilter, book) {
      if(selectedFilter == 'author' && book.author.toLowerCase() == this.filterValue.toLowerCase()){
        return true;
      }
      else if(selectedFilter == 'genre' && book.genre.toLowerCase() == this.filterValue.toLowerCase()){
        return true;
      }
      else if(selectedFilter == 'publisher' && book.publisher.toLowerCase() == this.filterValue.toLowerCase()){
        return true;
      }
      else{
        return false;
      }
   }
   // list of elements from which we can filter the list of books
   filters : any = [
    'author',
    'genre',
    'publisher',
    'none'
  ];

  // list of elements from which we can sort the list of books
  sortby : any = [
    'title',
    'height'
  ]

  // initializing selected sort
  sort : string ='none';

  // shows which radio button has selected in fillter 
  radioChangeHandler (event : any) {     
    this.selectedFilter = event.target.value;
  }

  // shows which radio button has selected in SortBy and sort accordingly
  radioChangeHandler1 (event : any) {
    this.sort = event.target.value;

    //sorting for string type
    if(this.sort === 'title'){
      this.books.sort((a,b) => a.title.localeCompare(b.title));
    }    
    else if(this.sort === 'height'){
      this.books.sort((a,b) => a.height < b.height ? -1 : 1);
    }    
  }


  // function which fetch data from database and insert into the list "books"
  getBooks(){
    this.api.getAllBooks().subscribe(
      data => {
        this.books = data;
      },
      error => {
        console.log(error);
      }       
    );
  }
  ngOnInit() {   
             
  }

}
