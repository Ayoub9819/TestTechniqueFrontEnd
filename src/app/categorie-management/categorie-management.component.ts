import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/CategoryService/category.service';

@Component({
  selector: 'app-categorie-management',
  templateUrl: './categorie-management.component.html',
  styleUrls: ['./categorie-management.component.css']
})
export class CategorieManagementComponent implements OnInit {
  categories:any = [];
  constructor(private categoryService : CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(res=>{this.categories = res;});
  }

}
