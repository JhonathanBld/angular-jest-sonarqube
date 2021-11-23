import { of } from "rxjs";
import { DashboardComponent } from "./dashboard.component";


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let usuarioServiceMock: any;
  let grupoServiceMock: any;

  beforeEach(async () => {
    usuarioServiceMock = {      
      buscarUsuarios: jest.fn().mockReturnValue(of([]))
    };

    grupoServiceMock = {      
      buscarGrupos: jest.fn().mockReturnValue(of([]))
    };
    
    
    component = new DashboardComponent(usuarioServiceMock, grupoServiceMock);
  });

  it('Iniciar component', () => {
    expect(component).toBeTruthy();
  });

  it('Iniciar component', () => {
    const ngOnInitSpy = jest.spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(ngOnInitSpy).toBeTruthy();
  });
  

  describe('Bsucar informações da tela', () => {

    it('Pegar os usuários', () => {
      const pegarUsuariosSpy = jest.spyOn(component, 'buscarUsuarios');
      component.buscarUsuarios();
      expect(pegarUsuariosSpy).toBeTruthy();
    });

    it('Pegar os grupos', () => {
      const pegarGruposSpy = jest.spyOn(component, 'buscarGrupos');
      component.buscarGrupos();
      expect(pegarGruposSpy).toBeTruthy();
    });

    
  });
});
