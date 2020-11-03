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

  constructor() { }

  ngOnInit(): void {
    this.events.push(new EventGallery('MEGAFARRA UNIVERSITARIA', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', '6', 'Oct',  'Lit Lleida', 'ggomezayuso@gmail.com'));
    this.events.push(new EventGallery('ETE SEECH', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', '10', 'Oct',  'Lit Lleida', '647 278 200'));
    this.events.push(new EventGallery('Reggaeton Classics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', '12', 'Oct',  'Lit Lleida', '647 278 200'));
    }

  elegirAccion(event) {
    console.log(event.target.value);
    if(event.target.value == "add") {
      this.accion = "AÑADIR EVENTO";
      this.container = "add"
    } else if(event.target.value == "edit") {
      this.accion = "EDITAR EVENTO";
      this.container = "edit"
    } else if (event.target.value == "delete") {
      this.container = "delete"
      this.accion = "ELIMINAR EVENTO";
    } else {
      this.accion = "";
    }
  }

  enviarDatosAdd(event, descripcion, di, me, ubicacion, mail, acuerdo) {

    console.log(acuerdo);
    if((event && ubicacion && mail && descripcion)){
      this.events.push(new EventGallery(event, descripcion, di, me, ubicacion, mail ));
    }

  }

}
