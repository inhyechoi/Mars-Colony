import { Component } from '@angular/core';

@Component({
 selector: 'app-root',
 //router link is only for debugging. delete it before submitting.
 template: `
   <a routerLink="/register"></a>
   <a routerLink="/encounters"></a>
   <a routerLink="/report"></a>
   <a routerLink="/notfound"></a>
   <router-outlet></router-outlet>
 `,
 styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
}