import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/products/product.service';
import { Observable, forkJoin, Subscription } from "rxjs";
import { IProduct } from './interfaces/i-product';
import { CategoryService } from './services/categories/category.service';
import { ICategory } from './interfaces/i-category';
import { IDimension } from './interfaces/i-dimension';
import { DimensionService } from './services/dimensions/dimension.service';
import { FilterFormService } from './services/forms/filter-form.service';
import {  Router, ActivatedRoute } from '@angular/router';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[] = [];
  categories: ICategory[] = [];
  dimensions: IDimension[] = [];

  itemsPerPage: number = 9;
  page: number = 1;

  checkedCategories: FormArray = new FormArray([]);
  checkedDimensions: FormArray = new FormArray([]);

  subscription: Subscription = new Subscription();
   
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private dimensionService: DimensionService,
    public filterFormService: FilterFormService,
    public router: Router,
    public route: ActivatedRoute
    ) { }

  ngOnInit(): void{
    this.loadData();
    this.filterFormService.initializeForm();
  }

  loadData(): void{
    const requests: Observable<any>[] = [
      this.productService.getData(),
      this.categoryService.getData(),
      this.dimensionService.getData()
    ];

    forkJoin(requests).subscribe({
      next: (data: any) => {
        console.log(data);
        this.products = data[0];
        this.categories = data[1];
        this.dimensions = data[2];
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  
  loadProducts(): void{
    this.subscription.add(this.productService.getData().subscribe({
      next: (data: IProduct[]) => {
        this.products = data;
        this.filterByKeyword();
        this.filterByCategory();
        this.filterByDimensions();
        console.log(this.products)
      },
      error: (err) => {
        console.error(err);
      }
    }));
  }

  showProductDetails(id: number): void{
    this.router.navigate(['/products', id], {relativeTo: this.route})
  }

  changePage(event: any): void {
      this.page = event;
      this.loadProducts();
  }

  filterByKeyword(): void{
    var keyword = this.filterFormService.form.get("search")?.value;
    if(keyword !== ""){
      this.products = this.products.filter(p => p.name.toLowerCase().includes(keyword.toLowerCase()));
      console.log(keyword)
    }
  }

  filterByCategory(): void{
    if(this.checkedCategories.value.length !== 0){
      this.products = this.products.filter(p => this.checkedCategories.value.includes(p.categoryId));
    }
  }
  filterByDimensions(): void{
    if(this.checkedDimensions.value.length !== 0){
      this.products = this.products.filter(p => this.checkedDimensions.value.includes(p.dimensionsId));
    }
  }
  categoriesChanged(event: MatCheckboxChange): void{
    this.checkedCategories = this.filterFormService.form.get("categories") as FormArray;
    if(event.checked){
      this.checkedCategories.push(new FormControl(event.source.value))
    } else {
      const index = this.checkedCategories.controls.findIndex(x => x.value === event.source.value);
      this.checkedCategories.removeAt(index);
    }
    this.loadProducts();
  }

  dimensionsChanged(event: MatCheckboxChange): void{
    this.checkedDimensions = this.filterFormService.form.get("dimensions") as FormArray;
    if(event.checked){
      this.checkedDimensions.push(new FormControl(event.source.value))
    } else {
      const index = this.checkedDimensions.controls.findIndex(x => x.value === event.source.value);
      this.checkedDimensions.removeAt(index);
    }
    console.log(this.checkedDimensions)
    this.loadProducts();
  }
}
