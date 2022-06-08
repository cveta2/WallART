import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from "rxjs";
import { IProduct } from '../interfaces/i-product';
import { CategoryService } from '../services/categories/category.service';
import { ICategory } from '../interfaces/i-category';
import { IDimension } from '../interfaces/i-dimension';
import { DimensionService } from '../services/dimensions/dimension.service';
import { ProductService } from '../services/products/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: IProduct[] = [];
  public categories: ICategory[] = [];
  public dimensions: IDimension[] = [];
  public product: IProduct;
  public productId: number;
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private dimensionService: DimensionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    })
    this.loadData();
  }

  loadData(): void{
    const requests: Observable<any>[] = [
      this.productService.getData(),
      this.categoryService.getData(),
      this.dimensionService.getData()
    ];

    forkJoin(requests).subscribe({
      next: (data: any) => {
        this.product = data[0].find((p: IProduct) => p.id == this.productId);
        this.product.category = data[1].find((c: ICategory) => c.id == this.product.categoryId).name;
        this.product.dimensions = data[2].find((d: IDimension) => d.id == this.product.dimensionsId).dimensions
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
