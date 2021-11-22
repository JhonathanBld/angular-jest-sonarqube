import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from "../../core/angular-material.module";
import {RouterModule} from "@angular/router";
import { UsuarioComponent } from './usuario.component';
import { UsuarioService } from 'src/app/core/services/user.service';



@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ],
  providers :[
    UsuarioService
  ]
})
export class UsuarioModule { }
