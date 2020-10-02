export class Producto {
    nombre: string;
    sku: string;
    descripcion: string;
    precio: number;
    proveedor: string;

    constructor(nombre, sku, descripcion, precio, proveedor) {
        this.nombre = nombre;
        this.sku = sku;
        this.descripcion = descripcion;
        this.precio = precio;
        this.proveedor = proveedor;
    }
}