import { of } from "rxjs";
import { DashboardComponent } from "./dashboard.component";


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let usuarioserviceMock: any;

  beforeEach(async () => {
    usuarioserviceMock = {      
      buscarUsuarios: jest.fn().mockReturnValue(of([]))
    };
    
    component = new DashboardComponent(usuarioserviceMock);
  });

  it('Iniciar component', () => {
    expect(component).toBeTruthy();
  });

  it('Iniciar component', () => {
    const ngOnInitSpy = jest.spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(ngOnInitSpy).toBeTruthy();
  });
  

  describe('Buscar usuarios', () => {

    it('Pegar os usuários', () => {
      const pegarUsuariosSpy = jest.spyOn(component, 'buscarUsuarios');
      component.buscarUsuarios();
      expect(pegarUsuariosSpy).toBeTruthy();
    });

    
  });
});
