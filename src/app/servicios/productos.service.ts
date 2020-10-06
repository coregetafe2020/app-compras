import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Producto } from '../models/producto.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  endPointProducto = environment.endPointProducto;

    constructor(private http: HttpClient) { }

    getProductos() {
      return this.http.get(this.endPointProducto)
                      .pipe(
                        map((res: any) => {
                          return res
                        })
                      )
    }

    getProductoId(_id: string) {
      return this.http.get(this.endPointProducto + '/' + _id)
                      .pipe(
                        map((res: any) => {
                          return res
                        })
                      )
    }

    getBusquedaProducto(termino) {
      return this.http.get(this.endPointProducto + '/busqueda/' + termino)
                      .pipe(
                        map((res: any) => {
                          return res
                        })
                      )
    }

    postProducto(producto: Producto) {
      return this.http.post(this.endPointProducto, producto)
                      .pipe(
                        map((res: any) => {
                          return res
                        })
                      )
    }

    putProducto(_id: string, producto: any) {
      return this.http.put(this.endPointProducto + '/' + _id, producto)
                      .pipe(
                        map((res: any) => {
                          return res
                        })
                      )
    }
    
    deleteProducto(_id) {
      return this.http.delete(this.endPointProducto + '/' + _id)
                      .pipe(
                        map((res: any) => {
                          return res
                        })
                      )
    }


}
