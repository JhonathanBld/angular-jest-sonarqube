
import { GrupoService } from './grupo.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

describe('GrupoService', () => {
  let service: GrupoService;
  let httpMock: HttpTestingController;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GrupoService]
    });
    injector = getTestBed();
    service = injector.get(GrupoService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Iniciar service', () => {
    expect(service).toBeTruthy();
  });

  describe('#getUsers', () => {
    it('should return an Observable<User[]>', () => {  
      service.buscarGrupos().subscribe(groups => {
        expect(groups.length).toBe(2);        
      });
  
      const req = httpMock.expectOne(`${environment.mockApi}/groups.json`);
      expect(req.request.method).toBe("GET");
    });
  });

  // it('Buscar todos os usuarios', () => {
  //   const getSpy = jest.spyOn(service, 'buscarUsuarios');
  //   service.buscarUsuarios();
  //   expect(getSpy).toBeTruthy();
  // });

  // it('Salvar usuario', () => {
  //   const saveSpy = jest.spyOn(service, 'save');
  //   const data = { name: 'teste', email: 'teste@email.com' }
  //   service.save(data);
  //   expect(saveSpy).toBeTruthy();
  // });


  // it('Salvar usuario', () => {
  //   const saveSpy = jest.spyOn(service, 'salvarUsuario');
  //   const usuario: any = {      
  //     "name": "Usuario Teste",
  //     "email": "usuarioteste@email.com",
  //     "active": true
  //   };
  //   service.salvarUsuario(usuario);
  //   expect(saveSpy).toBeTruthy();
  // });

});
