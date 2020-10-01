import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavComponent } from './comunes/nav/nav.component';
import { ListadoProductosComponent } from './productos/listado-productos/listado-productos.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavComponent,
    ListadoProductosComponent,
    ListadoClientesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
