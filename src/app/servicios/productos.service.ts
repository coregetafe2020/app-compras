import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

    constructor(private http: HttpClient) { }

    getProductos() {
      return this.http.get('http://localhost:8080/producto')
                      .pipe(
                        map((res: any) => {
                          return res
                        })
                      )
    }


}
