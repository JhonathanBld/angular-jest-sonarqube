import { UsuarioComponent } from "./usuario.component";

describe('UsuarioComponent', () => {
  let component: UsuarioComponent;
  let usuarioserviceMock: any;
  const usuarioTeste =
  {
    "nome": "Usuario Teste",
    "email": "usuarioteste5@email.com",
    "ativo": true
  }

  beforeEach(async () => {
    usuarioserviceMock = {
      get: jest.fn().mockReturnValue(new Promise<any>((resolve, reject) => true)),
      save: jest.fn().mockReturnValue(new Promise<any>((resolve, reject) => true))
    };
    component = new UsuarioComponent(usuarioserviceMock);
  });

  it('Iniciar component', () => {
    expect(component).toBeTruthy();
  });


  describe('Cadastros', () => {

    it('Teste cadastro usuario valido', () => {
      const cadastrarSpy = jest.spyOn(component, 'cadastrarNovoUsuario');
      component.form.setValue({ email: 'teste@example.com', nome: 'teste' })
      component.cadastrarNovoUsuario();
      expect(cadastrarSpy).toBeTruthy();
    });

    it('Teste cadastro usuario com nome vazio', () => {
      const cadastrarSpy = jest.spyOn(component, 'cadastrarNovoUsuario');
      component.form.setValue({ email: 'teste@example.com', nome: null });
      component.cadastrarNovoUsuario();
      expect(cadastrarSpy).toBeTruthy();
    });

    it('Teste cadastro usuario com email vazio', () => {
      const cadastrarSpy = jest.spyOn(component, 'cadastrarNovoUsuario');      
      component.form.setValue({ email: 'testeexample.com', nome: 'teste' });
      component.cadastrarNovoUsuario();
      expect(cadastrarSpy).toBeTruthy();      
    });

    it('Teste cadastro usuario com email invalido', () => {
      const cadastrarSpy = jest.spyOn(component, 'cadastrarNovoUsuario');      
      component.form.setValue({ email: 'testeexample.com', nome: 'teste' });
      component.cadastrarNovoUsuario();
      expect(cadastrarSpy).toBeTruthy();      
    });
  });

  it('Teste para retornar mensagem de erro do email vazio', () => {
    const pegarMensagemErroSpy = jest.spyOn(component, 'mensagemErroEmail');
    component.form.setValue({nome: 'teste', email: null});
    component.mensagemErroEmail();
    expect(pegarMensagemErroSpy).toBeTruthy();
  });

  it('ngOnDestroy', () => {
    const ngOnDestroySpy = jest.spyOn(component, 'ngOnDestroy');
    component.ngOnDestroy();
    expect(ngOnDestroySpy).toBeTruthy();
  });
});
