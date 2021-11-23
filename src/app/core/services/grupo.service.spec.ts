
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

  describe('buscarGrupos', () => {
    it('Retorna a request fake de grupos', () => {  
      service.buscarGrupos().subscribe(groups => {
        expect(groups.length).toBe(2);        
      });
  
      const req = httpMock.expectOne(`${environment.mockApi}/groups.json`);
      expect(req.request.method).toBe("GET");
    });
  });

});
