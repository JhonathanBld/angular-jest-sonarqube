import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { UsuarioModule} from "./usuario/usuario.module";
import { ListagemUsuarioModule } from './listagem-usuarios/listagem-usuarios.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AngularMaterialModule } from '../core/angular-material.module';

const Modules: any = [
  ListagemUsuarioModule,
  UsuarioModule,
  DashboardModule,
  AngularMaterialModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    ...Modules
  ]
})
export class PagesModule {
}
