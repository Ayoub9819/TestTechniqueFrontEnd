import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Category } from 'src/entities/category';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  host=environment.host
  constructor(private http:HttpClient) { }

  getAllProducts(id:any):Observable<any[]>{
    let host=environment.host;
    return this.http.get<any[]>(host+"/product/getProductsByCategoryId/"+id);
}
}
