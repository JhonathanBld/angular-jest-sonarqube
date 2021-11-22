import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import Mock from '../../../../mock/user.json';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {  

  buscarUsuarios() :Observable<UserModel[]> {
    let usuarios = Mock.users;
    let usuariosSalvos: Array<UserModel> = [];
    usuariosSalvos = JSON.parse(<string>localStorage.getItem('usuariosSalvos'));
    if (usuariosSalvos && usuariosSalvos.length) {
      usuariosSalvos.forEach((row: any) => usuarios.push(row));
    }
    return of(usuarios);
  }

  
  salvarUsuario(usuario: UserModel) :Observable<boolean> {
    let usuarios = [];
    let usuariosSalvos = JSON.parse(<string>localStorage.getItem('usuariosSalvos'));
    usuarios = usuariosSalvos && usuariosSalvos.length ? usuariosSalvos : [];
    usuarios.push(usuario)
    localStorage.setItem('usuariosSalvos', JSON.stringify(usuarios));
    return of(true);
  }

  save(data: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      try {
        let usuarios = [];
        let usuariosSalvos = JSON.parse(<string>localStorage.getItem('usuariosSalvos'));
        usuarios = usuariosSalvos && usuariosSalvos.length ? usuariosSalvos : [];
        usuarios.push(data)
        localStorage.setItem('usuariosSalvos', JSON.stringify(usuarios));
        resolve(true);
      } catch (e) {
        reject(e)
      }
    })
  }
}
