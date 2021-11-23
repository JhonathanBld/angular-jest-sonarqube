import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GroupsModel } from '../models/groups.model';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(private http: HttpClient) { }

  buscarGrupos(): Observable<GroupsModel[]> {
    return this.http.get<GroupsModel[]>(environment.mockApi + '/groups.json');
  }
}

