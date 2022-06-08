import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api-service.service';
import { IRoute } from 'src/app/shared/interfaces/i-route';
import { HttpClient } from '@angular/common/http';
import { Data } from 'src/app/shared/constants/data';

@Injectable({
  providedIn: 'root'
})
export class HeaderService extends ApiService<IRoute> {

  constructor(http: HttpClient) { super(http,Data.NavLinks) }
}
