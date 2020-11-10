import { Component, EventEmitter, Output } from '@angular/core';
import { eventoObjeto } from '../models/eventoObjeto';

@Component({
  selector: 'app-alta-evento',
  templateUrl: './alta-evento.component.html',
  styleUrls: ['./alta-evento.component.css']
})
export class AltaEventoComponent {

  @Output() eventos: eventoObjeto[];
  @Output() emitirDatos = new EventEmitter<eventoObjeto>();

  public evento: string;
  public descripcion: string;
  public cuando: string;
  public foto: string;
  public ubicacion: string;
  public contacto: string;
  public autor: string;

  mostrarError: string = "";
  mostrarError2: string = "";
  mostrarError3: string = "";
  mostrarError4: string = "";
  mostrarError5: string = "";
  mostrarError6: string = "";

  mailPatt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  anadirEventos(Nevento, descrip, fechaE, urlfoto, ubi, mail, nombres, check) {
    //recojemos la inmformacion y la guardamos

    this.evento = Nevento;
    this.descripcion = descrip;
    this.cuando = fechaE;
    this.foto = urlfoto;
    this.ubicacion = ubi;
    this.contacto = mail;
    this.autor = nombres;

//compribacion de errores i mostrado en el componente padre mediante
    if(Nevento.length==0){
      this.mostrarError="Introduzca un nombre para el evento";
    } else if(descrip.length<3){
      this.mostrarError2="El texto introducido es demasiado corto";
    }else if(!mail.match(this.mailPatt)){
      this.mostrarError3 = "El correo introducido no es valido";
    }else if(!check.value){
      this.mostrarError4 = "Has de marcar el check";
    } if((Nevento && ubi && mail && fechaE && descrip && check)){
      this.emitirDatos.emit({nombreEvento: this.evento, descripcionEvento: this.descripcion, fecha: this.cuando, foto: this.foto, ubicacionEvento: this.ubicacion, contactoEvento: this.contacto, autorEvento: this.autor });
    }

    }
  }


