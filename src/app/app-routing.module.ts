import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Product } from './product';
import { ProductentryComponent } from './productentry/productentry.component';


const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
