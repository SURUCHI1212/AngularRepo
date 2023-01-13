import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

 
@Injectable({
  providedIn: 'root'
})
export class CommonService 
{
  URL:string="https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get(this.URL);
  }
}
