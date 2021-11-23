import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from "@angular/router";
import { UsuarioService } from 'src/app/core/services/user.service';
import { UserModel } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.css']
})
export class ListagemUsuarioComponent implements OnInit, AfterViewInit {

  public displayedColumns: string[] = ['nome', 'email', 'grupo' , 'ativo'];
  public dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  constructor(private spinner: NgxSpinnerService, private usuarioservice: UsuarioService, private router: Router) {
    spinner.show();
    this.dataSource = new MatTableDataSource([{}])
  }

  ngOnInit(): void {
    this.buscarUsuarios();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  buscarUsuarios() {
    this.usuarioservice.buscarUsuarios().subscribe((res: UserModel[]) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.spinner.hide();
   })
  }

  editar(usuario: UserModel) {
    const usuarioAtivo:UserModel = usuario;
    localStorage.setItem('usuarioEditado', JSON.stringify(usuarioAtivo));
    this.router.navigate(['/usuario/' + (usuario.id)])
  }
}


