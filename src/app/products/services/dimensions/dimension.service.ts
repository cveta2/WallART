import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api-service.service';
import { IDimension } from '../../interfaces/i-dimension';
import { HttpClient } from '@angular/common/http';
import { Data } from 'src/app/shared/constants/data';

@Injectable({
  providedIn: 'root'
})
export class DimensionService extends ApiService<IDimension>{

  constructor(http: HttpClient) { super(http, Data.Dimensions) }
}
