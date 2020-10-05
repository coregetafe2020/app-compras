import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavComponent } from './comunes/nav/nav.component';
import { ListadoProductosComponent } from './productos/listado-productos/listado-productos.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbComponent } from './comunes/breadcrumb/breadcrumb.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavComponent,
    ListadoProductosComponent,
    ListadoClientesComponent,
    CrearProductoComponent,
    BreadcrumbComponent,
    EditarProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
