import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  constructor(protected http: HttpClient, @Inject("path") protected path: string) { }

  getData(): Observable<T[]> {
    return this.http.get<T[]>("http://localhost:4200/assets/data/" + this.path);
  }
}
