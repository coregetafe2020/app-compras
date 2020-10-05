import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']
})
export class EditarProductoComponent implements OnInit {

  _id: string;
  producto: any;

  constructor(private activatedRoute: ActivatedRoute,
              private productosService: ProductosService) { }

  ngOnInit(): void {
    this._id = this.activatedRoute.snapshot.params._id;
    this.productosService.getProductoId(this._id)
                          .subscribe(
                            (res: any) => {
                              this.producto = res.producto;
                              console.log(this.producto);
                            },
                            (err: any) => {
                              console.log(err);
                            }
                          )
  }

}
