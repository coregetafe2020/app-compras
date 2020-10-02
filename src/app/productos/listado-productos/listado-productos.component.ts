import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductosService } from 'src/app/servicios/productos.service';

class ResProducto {
  productos: Array<Producto>
}

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.scss']
})
export class ListadoProductosComponent implements OnInit {

  productos: Array<Producto>;

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
      this.productosService.getProductos()
                            .subscribe(
                              (res: ResProducto) => {
                                this.productos = res.productos;
                                console.log(this.productos)
                              },
                              (err: any) => {
                                console.log(err);
                              }
                              )
  }

}
