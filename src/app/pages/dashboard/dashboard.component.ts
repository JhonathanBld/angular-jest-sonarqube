import { Component, OnInit } from '@angular/core';
import { GroupsModel } from 'src/app/core/models/groups.model';
import { UserModel } from 'src/app/core/models/user.model';
import { GrupoService } from 'src/app/core/services/grupo.service';
import { UsuarioService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public totalUsuarios: number = 0;
  public totalGrupos: number = 0;
  constructor(private usuarioService: UsuarioService, private grupoService: GrupoService) { }

  ngOnInit() {
    this.buscarUsuarios();
    this.buscarGrupos();
  }

  buscarUsuarios(){
    this.usuarioService.buscarUsuarios().subscribe((res: UserModel[]) => {
      this.totalUsuarios = res.length;
    });
  }

  buscarGrupos(){
    this.grupoService.buscarGrupos().subscribe((res: GroupsModel[]) => {
      this.totalUsuarios = res.length;
    });
  }

}
