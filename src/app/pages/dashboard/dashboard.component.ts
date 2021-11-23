import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/core/models/user.model';
import { UsuarioService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public totalUsuarios: number = 0;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.buscarUsuarios();
  }

  buscarUsuarios(){
    this.usuarioService.buscarUsuarios().subscribe((res: UserModel[]) => {
      this.totalUsuarios = res.length;
    });
  }

}
