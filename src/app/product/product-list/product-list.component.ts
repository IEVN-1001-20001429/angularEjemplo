import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  ///Directivas *ngif
  productos:any[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas familiar",
      "Year":"Febrero 3 2020",
      "Precio":12000,
      "Marca":"NISSAN",
      "Color":"Morado",
      "ImagenUrl":"datos pendientes"
    }
  ];
}
