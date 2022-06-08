import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IRoute } from 'src/app/shared/interfaces/i-route';
import { HttpClient } from '@angular/common/http';
import { Data } from 'src/app/shared/constants/data';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api-service.service';
import { LoadDataComponent } from 'src/app/shared/components/load-data/load-data.component';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends LoadDataComponent<IRoute> implements OnInit {

  constructor(service: HeaderService) { super(service) }

  override ngOnInit(): void {
    super.loadData();
  }
}
