
import { of } from 'rxjs';
import { UsuarioService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

describe('UsuarioService', () => {
  let service: UsuarioService;
  let httpMock: HttpTestingController;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsuarioService]
    });
    injector = getTestBed();
    service = injector.get(UsuarioService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Iniciar service', () => {
    expect(service).toBeTruthy();
  });

  describe('buscarUsuarios', () => {
    it('Retorna a request fake de usuarios', () => {
  
      service.buscarUsuarios().subscribe(users => {
        expect(users.length).toBe(7);        
      });
  
      const req = httpMock.expectOne(`${environment.mockApi}/users.json`);
      expect(req.request.method).toBe("GET");
    });
  });
});
