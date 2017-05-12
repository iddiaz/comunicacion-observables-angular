import { Injectable } from '@angular/core';
// 1- inyectamos subject de la rxjs
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DatasharedService {
  // 2- Propiedad para que sea new Subject()
  private addData = new Subject<number> ();
  // 3- propiedad a la que se subscribe el compoente receptor
  addDataToLogin$ = this.addData.asObservable();

  constructor() {}

  // funcion que es llamada desde el componente emisor pasandole los datos  actualizar
  addItemToLogin( item: any ) {
    this.addData.next( item );
  }

}
