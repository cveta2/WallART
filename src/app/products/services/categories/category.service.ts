import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api-service.service';
import { HttpClient } from '@angular/common/http';
import { Data } from 'src/app/shared/constants/data';
import { ICategory } from '../../interfaces/i-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends ApiService<ICategory>{

  constructor(http: HttpClient) { super(http, Data.Categories)}
}
