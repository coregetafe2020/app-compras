import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  formSearch: FormGroup;
  consultando = false;

  @ViewChild('search', {static: false}) searchRef: ElementRef;

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    //this.loadProductos();
    this.formSearch = new FormGroup({
      search: new FormControl('')
    })
    this.onSearch();
  }

  onSearch() {
    this.formSearch.get('search').valueChanges
                                 .subscribe((termino) => {
                                    if(termino.length > 0) {
                                      this.consultando = true;
                                      this.productosService.getBusquedaProducto(termino)
                                          .subscribe(
                                            (res: any) => {
                                              this.consultando = false;
                                              this.productos = res.productos;
                                            },
                                            (err: any) => {
                                              this.consultando = false;
                                              console.log(err);
                                            }
                                          )
                                    } else {
                                      this.productos = [];
                                    }
                                 })
  }

  loadProductos() {
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

  removeProducto(_id) {
    this.productosService.deleteProducto(_id)
                        .subscribe(
                          (res: any) => {
                            console.log(res);
                            this.loadProductos();
                          },
                          (err: any) => {
                            console.log(err);
                          }
                        )
  }

  showSearch() {
    this.searchRef.nativeElement.classList.toggle('open');
  }

}
