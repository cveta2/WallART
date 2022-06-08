import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FilterFormService {

  public form: FormGroup;

  constructor() { 
    this.initializeForm();
  }

  initializeForm(): void{
    this.form = new FormGroup({
      search: new FormControl(""),
      categories: new FormArray([]),
      dimensions: new FormArray([])
    })
  };

}
