import { Component, OnInit } from '@angular/core';
import { LoadDataComponent } from 'src/app/shared/components/load-data/load-data.component';
import { IRoute } from 'src/app/shared/interfaces/i-route';
import { HeaderService } from "../../../header/services/header.service";
import { Data } from 'src/app/shared/constants/data';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.css']
})
export class QuickLinksComponent extends LoadDataComponent<IRoute> implements OnInit {

  constructor(service: HeaderService) { super(service) }

  override ngOnInit(): void {
    super.loadData();
  }

}
