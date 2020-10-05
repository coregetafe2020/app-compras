import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { ListadoProductosComponent } from './productos/listado-productos/listado-productos.component';

const routes: Routes = [
  {
    path:'', component: InicioComponent, 
    data: {rutas: [{ruta:'/', texto: 'Inicio'}]}
  },
  {
    path: 'listado-productos', component: ListadoProductosComponent,
    data: {rutas: [
            {ruta:'/', texto: 'Inicio'},
            {ruta: '/listado-productos', texto: 'Listado de productos'}
          ]}
  },
  {
    path: 'listado-clientes', component: ListadoClientesComponent,
    data: {rutas: [
      {ruta:'/', texto: 'Inicio'},
      {ruta: '/listado-clientes', texto: 'Listado de clientes'}
    ]}
  },
  {
    path: 'crear-producto', component: CrearProductoComponent,
    data: {rutas: [
      {ruta:'/', texto: 'Inicio'},
      {ruta: '/listado-productos', texto: 'Listado de productos'},
      {ruta: '/crear-producto', texto: 'Nuevo producto'}
    ]}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
