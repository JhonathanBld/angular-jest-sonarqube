import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {  

  constructor(private http: HttpClient) {}

  buscarUsuarios() :Observable<UserModel[]> {
    return this.http.get<UserModel[]>(environment.mockApi + '/users.json');
  }


}
