import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemUsuarioComponent } from './pages/listagem-usuarios/listagem-usuarios.component';
import {UsuarioComponent} from "./pages/usuario/usuario.component";


const routes: Routes = [
  { path: '', redirectTo: '/listagem-usuarios', pathMatch: 'full' },
  { path: 'listagem-usuarios', component: ListagemUsuarioComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'usuario/:id', component: UsuarioComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
