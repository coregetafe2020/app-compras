import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']
})
export class EditarProductoComponent implements OnInit {

  _id: string;
  producto: any;
  formProducto: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private productosService: ProductosService,
              private router: Router) { }

  ngOnInit(): void {
    this._id = this.activatedRoute.snapshot.params._id;
    this.formProducto = new FormGroup({
      nombre: new FormControl(''),
      descripcion: new FormControl(''),
      precio: new FormControl(null),
      sku: new FormControl('')
    })
    this.productosService.getProductoId(this._id)
                          .subscribe(
                            (res: any) => {
                              this.producto = res.producto;
                              this.formProducto.get('nombre').setValue(this.producto.nombre);
                              this.formProducto.get('descripcion').setValue(this.producto.descripcion);
                              this.formProducto.get('precio').setValue(this.producto.precio);
                              this.formProducto.get('sku').setValue(this.producto.sku);
                            },
                            (err: any) => {
                              console.log(err);
                            }
                          )
  }

  sendProducto() {
    const producto = {
      nombre: this.formProducto.get('nombre').value,
      descripcion: this.formProducto.get('descripcion').value,
      precio: this.formProducto.get('precio').value
    }
    this.productosService.putProducto(this._id, producto)
                        .subscribe(
                          (res: any) => {
                            console.log(res);
                            // lógica tras respuesta ok
                            this.router.navigate(['/listado-productos']);
                          },
                          (error: any) => {
                            console.log(error);
                          }
                        )
  }



}
