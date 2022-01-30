import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Category } from 'src/entities/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getAllCategories():Observable<any[]>{
    let host=environment.host;
    return this.http.get<any[]>(host+"/category/getAllCategories");
}
}
