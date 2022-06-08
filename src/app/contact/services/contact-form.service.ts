import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  form: FormGroup;
  constructor() { 
    this.initializeForm();
  }

  initializeForm(): void{
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });
  }
}
