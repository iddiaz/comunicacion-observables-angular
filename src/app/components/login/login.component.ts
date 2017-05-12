import { Component, OnInit } from '@angular/core';
import { DatasharedService } from './../../services/datashared.service';
import { DataShared2Service } from './../../services/dataShared2.service';

import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-login',
  template: `
    <p>
      login Works! : tengo el valor del body que es {{valorRecibido }}
    </p>
    <p>
      Reciviendo parametro de otro modo! : tengo el valor del body que es {{ dato$ | async }}
    </p>

  `,
  styles: []
})
export class LoginComponent implements OnInit {

  valorRecibido: number;
  dato$: Observable<number>;
 

  constructor( private datashared: DatasharedService, private dataShared2: DataShared2Service) { }

  ngOnInit() {
  //  this.subscription = this.datashared.addDataToLogin$.subscribe( item => item );
  this.datashared.addDataToLogin$.subscribe(item => {
    this.valorRecibido = item;
  });

  this.dato$ = this.dataShared2.resolverGestionParametro$();
  // Y si se desea se puede subscribir pero no es necesario.
  this.dato$.subscribe( result => console.log('El valor que llega es: ',result));


  }

}
