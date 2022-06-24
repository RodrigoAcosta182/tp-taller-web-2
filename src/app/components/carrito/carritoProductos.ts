import { IProducto } from 'src/app/models/producto.interface';

export var carritoProductos: IProducto[] = [
  {
    id: 1,
    nombre: 'Barba',
    detalles: 'productDetail1',
    precio: 100,
    cantidadSesiones: 2,
    imagen: '../../../assets/images/01.jpg',
  },
  {
    id: 2,
    nombre: 'Genitales',
    detalles: 'productDetail2',
    precio: 100,
    cantidadSesiones: 3,
    imagen: '../../../assets/images/02.jpg',
  },
];
