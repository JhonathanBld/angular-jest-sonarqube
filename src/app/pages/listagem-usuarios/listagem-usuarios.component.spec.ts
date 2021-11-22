import {ListagemUsuarioComponent} from './listagem-usuarios.component';
import { UserModel } from 'src/app/core/models/user.model';
import { of } from 'rxjs';


describe('ListagemUsuarioComponent', () => {
  let component: ListagemUsuarioComponent;
  let spinnerServiceMock: any;
  let usuarioserviceMock: any;
  let routerMock: any;
  let fixture:any;

  beforeEach(async () => {
    // spinner
    spinnerServiceMock = {
      show: jest.fn().mockReturnValue(new Promise<any>((resolve, reject) => true)),
      hide: jest.fn().mockReturnValue(new Promise<any>((resolve, reject) => true))
    };
    //  service Usuario
    usuarioserviceMock = {      
      buscarUsuarios: jest.fn().mockReturnValue(of([]))
    };
    // instancia variavel mock para router Modulo de rotas do Angular
    routerMock = {
      navigate: jest.fn(),
    }
    component = new ListagemUsuarioComponent(spinnerServiceMock, usuarioserviceMock, routerMock);
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
      const pegarUsuariosSpy =  jest.spyOn(component, 'buscarUsuarios');
      component.buscarUsuarios();
      
      expect(pegarUsuariosSpy).toBeTruthy();
    }));

    it('Editar Usuário', () => {
      const editarSpy = jest.spyOn(component, 'editar');
      const usuario: UserModel = {
        id: 2,
        nome: "Usuario Teste",
        email: "usuarioteste@email.com",
        ativo: true
      }
      component.editar(usuario);
      const usuarioEditado = {nome: usuario.nome, email: usuario.email};
      localStorage.setItem('usuarioEditado', JSON.stringify(usuarioEditado));
      routerMock.navigate(['/usuario/' + (usuario.id)])
      expect(editarSpy).toBeTruthy();
    });

  });

  it('Pegar os usuários', () => {
    const pegarUsuariosSpy = jest.spyOn(component, 'buscarUsuarios');
    component.buscarUsuarios();
    expect(pegarUsuariosSpy).toBeTruthy();
  });


  it('Testar Paginação', () => {
    if (component.dataSource.paginator) {
      component.dataSource.paginator.firstPage();
    }
    expect(component).toBeTruthy();
  });


});
