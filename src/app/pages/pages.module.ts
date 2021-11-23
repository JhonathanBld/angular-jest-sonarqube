import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { AngularMaterialModule } from '../core/angular-material.module';
import { GrupoModule } from './grupo/grupo.module';
import { ListagemUsuarioModule } from './usuario/listagem-usuarios/listagem-usuarios.module';

const Modules: any = [
  ListagemUsuarioModule,
  DashboardModule,
  GrupoModule,
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
