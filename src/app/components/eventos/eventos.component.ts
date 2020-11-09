import { Component, OnInit } from '@angular/core';
import { eventoObjeto } from '../models/eventoObjeto';

@Component({
  selector: 'app-events',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: eventoObjeto[] = [];
  accion: String;

  public container: string;

  public evento: string;
  public eventoEditar: string = "";
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
  mailPatt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



  constructor() { }

  ngOnInit(): void {
    this.eventos.push(new eventoObjeto('MEGAFARRA UNIVERSITARIA', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', '6', 'Oct',  'Lit Lleida', 'ggomezayuso@gmail.com'));
    this.eventos.push(new eventoObjeto('ETE SEECH', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', '10', 'Oct',  'Lit Lleida', '647 278 200'));
    this.eventos.push(new eventoObjeto('Reggaeton Classics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', '12', 'Oct',  'Lit Lleida', '647 278 200'));
    }

  elegirAccion(event) {
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

  anadirEventos(evento, descripcion, di, me, ubicacion, mail, check) {
    if(evento.length==0){
      this.mostrarError="Introduzca un nombre para el evento";
    } else if(descripcion.length<3){
      this.mostrarError2="El texto introducido es demasiado corto";
    }else if(!mail.match(this.mailPatt)){
      this.mostrarError3 = "El correo introducido no es valido";
    }else if(!check.value){
      this.mostrarError4 = "Has de marcar el check";
    }
    if((evento && ubicacion && mail && descripcion && check)){
      this.eventos.push(new eventoObjeto(evento, descripcion, di, me, ubicacion, mail ));
    }
  }


  editarEventos(evento, descripcion, di, me, ubicacion, mail) {

    for(var x = 0; x<this.eventos.length; x++) {
      if(this.eventos[x].nombreEvento == evento){
        if((evento && ubicacion && mail && descripcion)){
          for(var x = 0; x<this.eventos.length; x++) {
            if(this.eventos[x].nombreEvento == evento){
              this.eventos.splice( x, 1 );
            }
          }
          this.eventos.push( new eventoObjeto(evento, descripcion, di, me, ubicacion, mail ));
        }
      }else{
        if(evento.length==0){
          this.mostrarError="Introduzca un nombre para el evento";
        }else if(descripcion.length<3){
          this.mostrarError2="El texto introducido es demasiado corto";
        }else if(!mail.match(this.mailPatt)){
          this.mostrarError3 = "El correo introducido no es valido";
        }

        if( this.eventoEditar.length==0){
          this.mostrarError="Introduzca un nombre de un evento";
        }
      }
    }





  }



  borrarEvento(evento){
    for(var x = 0; x<this.eventos.length; x++) {
      if(this.eventos[x].nombreEvento == evento){
        this.eventos.splice( x, 1 );
      }
    }
}
}
