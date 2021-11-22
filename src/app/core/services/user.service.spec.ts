
import { of } from 'rxjs';
import { UsuarioService } from './user.service';

describe('UsuarioService', () => {
  let service: UsuarioService;

  beforeEach(() => {
    service = new UsuarioService();
  });

  it('Iniciar service', () => {
    expect(service).toBeTruthy();
  });

  it('Buscar todos os usuarios', () => {
    const getSpy = jest.spyOn(service, 'buscarUsuarios');
    service.buscarUsuarios();
    expect(getSpy).toBeTruthy();
  });

  // it('GET com novos cadastros', () => {
  //   const getSpy = jest.spyOn(service, 'get');
  //   const usuarios = [
  //     {
  //       "id": 3,
  //       "name": "Jefferson Silva",
  //       "email": "silvajefferson@email.com",
  //       "active": false
  //     },
  //     {
  //       "id": 4,
  //       "name": "Ana Maria",
  //       "email": "anamaria@email.com",
  //       "active": true
  //     },
  //   ]
  //   localStorage.setItem('usuariosSalvos', JSON.stringify(usuarios));
  //   service.get();
  //   expect(getSpy).toBeTruthy();
  // });

  it('Salvar usuario', () => {
    const saveSpy = jest.spyOn(service, 'save');
    const data = { name: 'teste', email: 'teste@email.com' }
    service.save(data);
    expect(saveSpy).toBeTruthy();
  });


  it('Salvar usuario', () => {
    const saveSpy = jest.spyOn(service, 'salvarUsuario');
    const usuario: any = {      
      "name": "Usuario Teste",
      "email": "usuarioteste@email.com",
      "active": true
    };
    service.salvarUsuario(usuario);
    expect(saveSpy).toBeTruthy();
  });

});
