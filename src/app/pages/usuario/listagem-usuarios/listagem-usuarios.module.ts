import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";
import { CommonModule } from '@angular/common';
import { ListagemUsuarioComponent } from './listagem-usuarios.component';
import { UsuarioService } from 'src/app/core/services/user.service';
import { AngularMaterialModule } from 'src/app/core/angular-material.module';

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
