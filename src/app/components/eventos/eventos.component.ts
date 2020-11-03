import { Component, OnInit } from '@angular/core';
import { EventGallery } from '../models/event-gallery';

@Component({
  selector: 'app-events',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  events: EventGallery[] = [];
  accion: String;

  public container: string;

  public evento: string;
  public descripcion: string;
  public dia: string;
  public mes: string;
  public ubicacion: string;
  public contacto: string;

  mostrarError: string = "";
  mostrarError2: string = "";
  mostrarError3: string = "";
  mostrarError4: string = "";
  mostrarError5: string = "";
  mostrarError6: string = "";
  mailPatt = '^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$ ';



  constructor() { }

  ngOnInit(): void {
    this.events.push(new EventGallery('MEGAFARRA UNIVERSITARIA', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', '6', 'Oct',  'Lit Lleida', 'ggomezayuso@gmail.com'));
    this.events.push(new EventGallery('ETE SEECH', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', '10', 'Oct',  'Lit Lleida', '647 278 200'));
    this.events.push(new EventGallery('Reggaeton Classics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', '12', 'Oct',  'Lit Lleida', '647 278 200'));
    }

  elegirAccion(event) {
    console.log(event.target.value);
    if(event.target.value == "add") {
      this.container = "add"
    } else if(event.target.value == "edit") {
      this.container = "edit"
    } else if (event.target.value == "delete") {
      this.container = "delete"
    } else {
      this.accion = "";
    }
  }

  enviarDatosAdd(event, descripcion, di, me, ubicacion, mail, check) {

    if(event.length==0){
      this.mostrarError="Introduzca un nombre para el evento";
    }

    if(descripcion.length<3){
      this.mostrarError2="El texto introducido es demasiado corto";
    }


    if(!mail.match(this.mailPatt)){
      this.mostrarError3 = "El correo introducido no es valido";
    }


    if((event && ubicacion && mail && descripcion)){
      this.events.push(new EventGallery(event, descripcion, di, me, ubicacion, mail ));
    }

  }

}
