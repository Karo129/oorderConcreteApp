import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {path: '', redirectTo: 'homePage', pathMatch: 'full'},
  {path: 'homePage', component: HomePageComponent},
  {path: 'newOrder', component: NewOrderComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'edit/:id', component: NewOrderComponent},
  {path: '**', redirectTo: 'homePage', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
