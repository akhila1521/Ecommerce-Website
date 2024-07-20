import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';

import { NotFoundErrorComponent } from './not-found-error/not-found-error.component';
import { DetailsComponent } from './details/details.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {path:'', component:ProductosComponent},
  {path:'productos', component:ProductosComponent},
  {path:'card', component:CardComponent},
  {path:'details/:id', component:DetailsComponent},
  {path:'**', component:NotFoundErrorComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
