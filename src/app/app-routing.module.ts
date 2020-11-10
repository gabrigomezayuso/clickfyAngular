import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventosComponent } from './components/eventos/eventos.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

//ASIGNAMOS EL ROUTING
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' }, //pagina principal
  { path: 'home', component: HomeComponent }, //pagina home
  { path: 'eventos', component: EventosComponent }, //eventos
  { path: 'error', component: ErrorComponent }, //pagina error
  { path: '**' , redirectTo: '/error'} //pagina que no se encuentra, redirecciona a error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
