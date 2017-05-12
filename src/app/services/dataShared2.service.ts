// OTRO MODO DE IMPLEMENTAR LA COMUNICACION CON EL MISMO SISTEMA
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
// import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataShared2Service {

  dato: number;
  dato$: Subject<number> = new Subject<number>();

  constructor() { }

  gestionarParametro( item: number ){
    // si queremos podemos guardarlo antes y si no emitimos el parametro de la funcion y fuera.
    this.dato = item;
    // genera un nuevo valor en el observable
    this.dato$.next( this.dato );
  }

  // devuelve un observable que notifica cambios en el almacen de dato
  resolverGestionParametro$ ()  {
    // se comporta como un observable.
    return this.dato$.asObservable();
  }

}
