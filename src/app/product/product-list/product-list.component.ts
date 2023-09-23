import { Component } from '@angular/core';
import { IProductos } from '../iproductos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

imageWidth:number=50;
imageMargin:number=2;
muestraImg:boolean=true;
listFilter:string='';

showImage():void{
  this.muestraImg=!this.muestraImg;
}

  ///Directivas *ngif
  productos:IProductos[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas familiar",
      "Year":"Febrero 3 2020",
      "Precio":120000,
      "Marca":"NISSAN",
      "Color":"Morado",
      "ImagenUrl":"https://claveyscorner.com/wp-content/uploads/2020/08/2020-Nissan-Sentra-Front-Three-Quarter.jpg"
    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"4 puertas familiar",
      "Year":"Febrero 3 2020",
      "Precio":120000,
      "Marca":"Audi",
      "Color":"Blanco",
      "ImagenUrl":"https://claveyscorner.com/wp-content/uploads/2020/08/2020-Nissan-Sentra-Front-Three-Quarter.jpg"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"2 puertas familiar",
      "Year":"Marzo 5 2020",
      "Precio":150000,
      "Marca":"KIA",
      "Color":"Azul",
      "ImagenUrl":"https://claveyscorner.com/wp-content/uploads/2020/08/2020-Nissan-Sentra-Front-Three-Quarter.jpg"
    }
  ];
}
