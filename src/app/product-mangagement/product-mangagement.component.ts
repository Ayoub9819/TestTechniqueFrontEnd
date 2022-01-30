import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/ProductService/product.service';

@Component({
  selector: 'app-product-mangagement',
  templateUrl: './product-mangagement.component.html',
  styleUrls: ['./product-mangagement.component.css']
})
export class ProductMangagementComponent implements OnInit {

  products:any = [];
  errorMessage : String = "";
  constructor(private productService : ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.productService.getAllProducts(id).subscribe(res=>{
      this.products = res;
    },
    (err) =>{
      if(err.status != "200"){
        this.errorMessage = err.error.message;
      }
    });
  }

}
