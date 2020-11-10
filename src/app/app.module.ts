import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { FooterComponent } from './components/footer/footer.component';
import { AltaEventoComponent } from './components/alta-evento/alta-evento.component';
import { EditarEventoComponent } from './components/editar-evento/editar-evento.component';
import { BorrarEventosComponent } from './components/borrar-eventos/borrar-eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EventosComponent,
    FooterComponent,
    AltaEventoComponent,
    EditarEventoComponent,
    BorrarEventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
