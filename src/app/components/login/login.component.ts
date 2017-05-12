import { Component, OnInit } from '@angular/core';
import { DatasharedService } from './../../services/datashared.service';
// import { Observable } from 'rxjs/Rx';
// import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  template: `
    <p>
      login Works! : tengo el valor del body que es {{valorRecibido }}
    </p>

  `,
  styles: []
})
export class LoginComponent implements OnInit {

  valorRecibido: number;
 

  constructor( private datashared: DatasharedService) { }

  ngOnInit() {
  //  this.subscription = this.datashared.addDataToLogin$.subscribe( item => item );
  this.datashared.addDataToLogin$.subscribe(item=> {
    this.valorRecibido = item;
  } )
  }

}
