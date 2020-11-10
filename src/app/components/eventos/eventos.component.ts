import { Component, OnInit } from '@angular/core';
import { eventoObjeto } from '../models/eventoObjeto';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  //creamos los diefrentes varfiables que nos serviran tanto como parta importar de los hijos como para mostrar mensajes de rror
  eventos: eventoObjeto[] = [];
  vacio:string;
  public contenido: string;
  mostrarError: string = "";
  mostrarError2: string = "";
  mostrarError3: string = "";
  mailPatt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



  constructor() { }

  //insertamos eventos por defecto
  ngOnInit(): void {
    this.eventos.push(new eventoObjeto('MEGAFARRA UNIVERSITARIA', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', '18-10-2020' , 'https://i.imgur.com/I1sd68W.png',  'Lit Lleida', 'ggomezayuso@gmail.com', 'Gabriel Gómez'));
    this.eventos.push(new eventoObjeto('ETE SEECH', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', '19-10-2020', 'https://i.imgur.com/Ol4npJg.png',  'Lit Lleida', 'ggomezayuso@gmail.com','Gabriel Gómez'));
    this.eventos.push(new eventoObjeto('Reggaeton Classics', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis soluta odit aliquam neque? Dignissimos, blanditiis.', '20-10-2020', 'https://i.imgur.com/P8eeThv.png',  'Lit Lleida', 'ggomezayuso@gmail.com','Gabriel Gómez'));
    }


    //esta funcion lo que hace es mostrarnos iferentes contenedores de el componente Eventos dependiendo de su opcion seleccionada.
  elegirAccion(accion) {
    //en caso de que la accion sea "anadir"
    if(accion.target.value == "anadir") {
      //mostrara el contenido "anadir" y asi succesivamente
      this.contenido = "anadir"
    } else if(accion.target.value == "editar") {
      this.contenido = "editar"
    } else if (accion.target.value == "borrar") {
      this.contenido = "borrar"
    } else {
      //en caso de no ser ninguna de las 3, se mostrara un espacio vacio
      this.vacio = "";
    }
  }

  //esta funcion llama el evento hijo (AltaEvento) el cual hace un push de la informacion
  anadirEvento(eventoHijo) {
    this.eventos.push(new eventoObjeto(eventoHijo.nombreEvento , eventoHijo.descripcionEvento, eventoHijo.fecha, eventoHijo.foto, eventoHijo.ubicacionEvento, eventoHijo.contactoEvento, eventoHijo.autorEvento));
  }



  //esta funcion llama el evento hijo (EdfitarEvento) el cual hace un push de la informacion y elimina el evento que se llama igual
  editarEventos(eventoHijo) {
    for(var x = 0; x<this.eventos.length; x++) {
      if(this.eventos[x].nombreEvento == eventoHijo.nombreEvento){
          for(var x = 0; x<this.eventos.length; x++) {
            if(this.eventos[x].nombreEvento == eventoHijo.nombreEvento){
              this.eventos.splice( x, 1 );
              this.eventos.push(new eventoObjeto(eventoHijo.nombreEvento , eventoHijo.descripcionEvento, eventoHijo.fecha, eventoHijo.foto, eventoHijo.ubicacionEvento, eventoHijo.contactoEvento, eventoHijo.autorEvento));
            }
        }
      }else{
        if(eventoHijo.nombreEvento.length==0){
          this.mostrarError="Introduzca un nombre para el evento";
        }else if(eventoHijo.descripcionEvento.length<3){
          this.mostrarError2="El texto introducido es demasiado corto";
        }else if(!eventoHijo.contactoEvento.match(this.mailPatt)){
          this.mostrarError3 = "El correo introducido no es valido";
        }
      }
    }
  }


  //esta funcion borra al evento que se llame igual que el introducido por el usuario
  //HABIA INTENTADO HACERLO EN OTRO COMPONENTE PERO ME FALLABA!
  borrarEvento(evento){
    for(var x = 0; x<this.eventos.length; x++) {
      if(this.eventos[x].nombreEvento == evento){
        this.eventos.splice( x, 1 );
      }
    }
}
}
