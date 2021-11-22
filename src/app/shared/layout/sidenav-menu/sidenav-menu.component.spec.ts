import { SidenavMenuComponent } from "./sidenav-menu.component";


describe('SidenavMenuComponent', () => {
  let component: SidenavMenuComponent;

  beforeEach(async () => {
    component = new SidenavMenuComponent();
  });

  it('Iniciar component', () => {
    expect(component).toBeTruthy();
  });
});
