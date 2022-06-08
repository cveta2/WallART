import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api-service.service';
import { HttpClient } from '@angular/common/http';
import { Data } from 'src/app/shared/constants/data';
import { IProduct } from 'src/app/products/interfaces/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ApiService<IProduct> {

  constructor(http: HttpClient) { super(http, Data.Products) }
}
