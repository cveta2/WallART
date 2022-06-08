import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ProductModule } from './products/product/product.module';
import { AuthorModule } from './author/author.module';
import { ContactModule } from './contact/contact.module';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
      },
      {
        path: "home",
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
      },
      {
        path: "products",
        loadChildren: () => import("./products/products.module").then(m => m.ProductsModule)
      },
      {
        path: "products/:id",
        loadChildren: () => import("./products/product/product.module").then(m => ProductModule)
      },
      {
        path: "author",
        loadChildren: () => import("./author/author.module").then(m => AuthorModule)
      },
      {
        path: "contact",
        loadChildren: () => import("./contact/contact.module").then(m => ContactModule)
      }
    ]
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
