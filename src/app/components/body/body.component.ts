import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { DatasharedService } from './../../services/datashared.service';
import { DataShared2Service } from './../../services/dataShared2.service';

@Component({
  selector: 'app-body',
  template: `
    <p>
      body Works!
    </p>
    <input type="text" [(ngModel)]="valor" (ngModelChange)="cambiarValor()">
    <input type="text" [(ngModel)]="dato" (ngModelChange)="cambiarValorDato()">
    <h2>{{valor}}</h2>
    <button tipe="button" (click)="cambiarValor()">Añadir valor a login</button>
  `,
  styles: []
})
export class BodyComponent implements OnInit {

  valor = 15;
  dato: number;

  constructor( private datashared: DatasharedService, private dataShared2: DataShared2Service ) { }

  ngOnInit() {
  }
  // servicio 1
  cambiarValor(){
    // 4- Llamando a la funcion emisora gracias al next()
    this.datashared.addItemToLogin( this.valor );
    console.log('has cambiado el valor', this.valor);
  }
  // servicio 2
  cambiarValorDato() {
    this.dataShared2.gestionarParametro (this.dato );
  }


}
