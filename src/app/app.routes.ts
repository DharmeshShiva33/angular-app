import { Routes } from '@angular/router';

export const routes: Routes = [
    {  path: '',
        loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
    },
    {
        path: 'product-details/:id',
        loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsModule)
    },
    {
        path: 'cart-products',
        loadChildren: () => import('./cart-products/cart-products.module').then( m => m.CartProductsModule)
    }
];
