import { Component, OnInit } from '@angular/core';
import { ContactFormService } from '../../services/contact-form.service';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(public form: ContactFormService) { }

  ngOnInit(): void {
    this.form.initializeForm();
  }

  onSubmit(): void{
    console.log(this.form)  
    this.form.form.reset();
  }
}
