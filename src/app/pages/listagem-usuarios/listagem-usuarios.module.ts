import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../core/angular-material.module';
import { ListagemUsuarioComponent } from './listagem-usuarios.component';
import { UsuarioService } from 'src/app/core/services/user.service';

@NgModule({
  declarations: [
    ListagemUsuarioComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    NgxSpinnerModule,
    AngularMaterialModule
  ],
  providers: [
    UsuarioService
  ],
})
export class ListagemUsuarioModule { }
