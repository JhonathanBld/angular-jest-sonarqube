import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
    <app-sidenav-menu></app-sidenav-menu>
    <ngx-spinner bdColor = "rgba(0, 0, 0, 0.8)" size = "medium" color = "#f27000" type = "ball-clip-rotate" [fullScreen] = "true"><p style="color: white" > Carregando... </p></ngx-spinner>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'portal';
}
