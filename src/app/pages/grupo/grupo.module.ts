import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemGrupoComponent } from './listagem-grupo/listagem-grupo.component';
import { AngularMaterialModule } from 'src/app/core/angular-material.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule,
    AngularMaterialModule
  ],
  declarations: [ListagemGrupoComponent]
})
export class GrupoModule { }
