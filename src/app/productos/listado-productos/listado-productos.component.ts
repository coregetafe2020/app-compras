import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.scss']
})
export class ListadoProductosComponent implements OnInit {

  productos: any;

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
      this.productosService.getProductos()
                            .subscribe(
                              (res: any) => {
                                this.productos = res.productos;
                                console.log(this.productos)
                              },
                              (err: any) => {
                                console.log(err);
                              }
                              )
  }

}
