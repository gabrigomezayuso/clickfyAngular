import { Component, EventEmitter, Output } from '@angular/core';
import { eventoObjeto } from '../models/eventoObjeto';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css']
})
export class EditarEventoComponent  {

  @Output() eventos: eventoObjeto[];
  @Output() emitirDatos = new EventEmitter<eventoObjeto>();

  public evento: string;
  public descripcion: string;
  public cuando: string;
  public foto: string;
  public ubicacion: string;
  public contacto: string;

  mostrarError: string = "";
  mostrarError2: string = "";
  mostrarError3: string = "";
  mostrarError4: string = "";
  mostrarError5: string = "";
  mostrarError6: string = "";

  mailPatt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  editarEventos(Nevento, descrip, fechaE, urlfoto, ubi, mail) {

    //recojemos la inmformacion y la guardamos
    this.evento = Nevento;
    this.descripcion = descrip;
    this.cuando = fechaE;
    this.foto = urlfoto;
    this.ubicacion = ubi;
    this.contacto = mail;

  //hacemos un push
    this.emitirDatos.emit({nombreEvento: this.evento, descripcionEvento: this.descripcion, fecha: this.cuando, foto: this.foto, ubicacionEvento: this.ubicacion, contactoEvento: this.contacto });

  }

}
