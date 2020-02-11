import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './books';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getBook(arg0: number) {
    throw new Error("Method not implemented.");
  }

  // books is a list of the object of class Book which is imported from books.ts
  books : Book[] ;

  baseurl = "http://127.0.0.1:8000";
  //json
  httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});

  // http is the instance of the HttpClient class
  constructor(private http : HttpClient) {   }

  // to fetch all the data from given url using api
  getAllBooks() : Observable<any>{
    return this.http.get(this.baseurl + '/books/', 
    {headers : this.httpHeaders});
  } 

  // to get book whose id is as given in parameter of the function 
  getOneBook(id) : Observable<any>{
    return this.http.get(this.baseurl + '/books/' + id + '/',
    {headers : this.httpHeaders});
  }

  // to add new book to book list on database by using post api
  createBook(book): Observable<any> {
    const body = { title : book.title , author : book.author , genre : book.genre , height : book.height , publisher : book.publisher};
    return this.http.post(this.baseurl + '/books/',body,
    {headers : this.httpHeaders});
  }

  // to update data of the book on the database 
  updateBook(book) : Observable<any> {
    const body = { title : book.title , author : book.author , genre : book.genre , height : book.height , publisher : book.publisher};
    return this.http.put(this.baseurl + '/books/' + book.id + '/',body,
    {headers : this.httpHeaders});
  }

  // to delete the data of book which contains id equal to given parameter "id" 
  deleteBook(id): Observable<any> {
    return this.http.delete(this.baseurl + '/books/' + id + '/',
    {headers : this.httpHeaders});
  }
}
 