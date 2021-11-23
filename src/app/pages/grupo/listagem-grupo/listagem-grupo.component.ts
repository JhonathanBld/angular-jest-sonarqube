import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { GroupsModel } from 'src/app/core/models/groups.model';
import { GrupoService } from 'src/app/core/services/grupo.service';

@Component({
  selector: 'app-listagem-grupo',
  templateUrl: './listagem-grupo.component.html',
  styleUrls: ['./listagem-grupo.component.css']
})
export class ListagemGrupoComponent implements OnInit {
  public displayedColumns: string[] = ['nome', 'descricao'];
  public dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  constructor(private spinner: NgxSpinnerService, private groupsService: GrupoService) {
    spinner.show();
    this.dataSource = new MatTableDataSource([{}])
  }

  ngOnInit(): void {
    this.buscarGrupos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  buscarGrupos() {
    this.groupsService.buscarGrupos().subscribe((res: GroupsModel[]) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.spinner.hide();
   })
  }

}
