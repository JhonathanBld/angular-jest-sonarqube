import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { UsuarioModule} from "./usuario/usuario.module";
import { ListagemUsuarioModule } from './listagem-usuarios/listagem-usuarios.module';

const Modules: any = [
  ListagemUsuarioModule,
  UsuarioModule
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
