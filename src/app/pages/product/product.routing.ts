import {Route} from '@angular/router';
import {ProductComponent} from "./product.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {EditProductComponent} from "./edit-product/edit-product.component";

export const productRouting: Route[] = [
{
    path: '',
    component: ProductComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: ProductListComponent,
      },
      {
        path: 'create',
        component: EditProductComponent,
      },
      {
        path: 'edit/:id',
        component: EditProductComponent,
      },
    ]
  }
];
