import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { DatasharedService } from './../../services/datashared.service';

@Component({
  selector: 'app-body',
  template: `
    <p>
      body Works!
    </p>
    <input type="text" [(ngModel)]="valor" (ngModelChange)="cambiarValor()">
    <h2>{{valor}}</h2>
    <button tipe="button" (click)="cambiarValor()">Añadir valor a login</button>
  `,
  styles: []
})
export class BodyComponent implements OnInit {

  valor: number = 15;

  constructor( private datashared: DatasharedService ) { }

  ngOnInit() {
  }

  cambiarValor(){
    // 4- Llamando a la funcion emisora gracias al next()
    this.datashared.addItemToLogin( this.valor );
    console.log('has cambiado el valor', this.valor);
  }


}
