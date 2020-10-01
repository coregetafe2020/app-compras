import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoProductosComponent } from './productos/listado-productos/listado-productos.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path: 'listado-productos', component: ListadoProductosComponent},
  {path: 'listado-clientes', component: ListadoClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
