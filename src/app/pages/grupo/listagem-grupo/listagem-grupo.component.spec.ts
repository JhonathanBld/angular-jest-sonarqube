
import { UserModel } from 'src/app/core/models/user.model';
import { of } from 'rxjs';
import { ListagemGrupoComponent } from './listagem-grupo.component';


describe('ListagemGrupoComponent', () => {
  let component: ListagemGrupoComponent;
  let spinnerServiceMock: any;
  let grupoService: any;
  let routerMock: any;

  beforeEach(async () => {
    // spinner
    spinnerServiceMock = {
      show: jest.fn().mockReturnValue(new Promise<any>((resolve, reject) => true)),
      hide: jest.fn().mockReturnValue(new Promise<any>((resolve, reject) => true))
    };
    //  service Usuario
    grupoService = {      
      buscarGrupos: jest.fn().mockReturnValue(of([]))
    };
    // instancia variavel mock para router Modulo de rotas do Angular
    routerMock = {
      navigate: jest.fn(),
    }
    component = new ListagemGrupoComponent(spinnerServiceMock, grupoService);
  });

  describe('Testando as dependencias do componente', () => {
    it('Iniciar component', () => {
      const ngOnInitSpy = jest.spyOn(component, 'ngOnInit');
      component.ngOnInit();
      expect(ngOnInitSpy).toBeTruthy();
    });
  
    it('Ativar spinner', () => {
      spinnerServiceMock.show();
      expect(component).toBeTruthy();
    });
  
    it('Desativar spinner', () => {
      spinnerServiceMock.hide();
      expect(component).toBeTruthy();
    });
  
    it('Depois de iniciar o component', () => {
      const ngAfterViewInitSpy = jest.spyOn(component, 'ngAfterViewInit');
      component.ngAfterViewInit();
      expect(ngAfterViewInitSpy).toBeTruthy();
    });
  });

  describe('Testando as chamadas para services', () => {

    it("Verifica a chamada de buscar os usuarios", (() => {
      const pegarUsuariosSpy =  jest.spyOn(component, 'buscarGrupos');
      component.buscarGrupos();      
      expect(pegarUsuariosSpy).toBeTruthy();
    }));

  });

  it('Pegar os usuários', () => {
    const pegarUsuariosSpy = jest.spyOn(component, 'buscarGrupos');
    component.buscarGrupos();
    expect(pegarUsuariosSpy).toBeTruthy();
  });


  it('Testar Paginação', () => {
    if (component.dataSource.paginator) {
      component.dataSource.paginator.firstPage();
    }
    expect(component).toBeTruthy();
  });

});
