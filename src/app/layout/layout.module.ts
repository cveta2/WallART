import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialsComponent } from './components/footer/components/socials/socials.component';
import { QuickLinksComponent } from './components/footer/components/quick-links/quick-links.component';
import { CopyrightComponent } from './components/footer/components/copyright/copyright.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SocialsComponent,
    QuickLinksComponent,
    CopyrightComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
