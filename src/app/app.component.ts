//datos de prueba de api
import { HttpClient } from '@angular/common/http';
// suscripcion por rx
import { Subscription } from 'rxjs';

// jquery datatables import
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


//array de clientes de api
clients:any[];
// nuestra tabla
dataTable: any;

//subsc
public subscription: Subscription;

constructor(private http: HttpClient, private chRef: ChangeDetectorRef){}

ngOnInit(){
  this.http.get('https://www.datos.gov.co/resource/i8pe-at8d.json')

   .subscribe((data: any[]) => {
    this.clients = data;

    //Deteccion de cambios
    this.chRef.detectChanges();

    //Jquery datatables
  const table: any = $('table');
  this.dataTable = table.dataTable();
  });
}
}