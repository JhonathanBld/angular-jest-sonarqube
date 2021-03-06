import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListagemGrupoComponent } from './pages/grupo/listagem-grupo/listagem-grupo.component';
import { ListagemUsuarioComponent } from './pages/usuario/listagem-usuarios/listagem-usuarios.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'usuarios', component: ListagemUsuarioComponent },
  { path: 'grupos', component: ListagemGrupoComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
