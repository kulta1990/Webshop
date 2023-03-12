import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projekt1';

  /*------------------  datum footer --------------------- */
  datum: string = new Date().toString();

  /*---------------- Navbar EaseInOut smooth ----------------- */
  EaseInOut():void {
    let burger = document.getElementById('burgerMenu');
    let navi = document.getElementById('nav') as HTMLElement;
    let nav: string = navi.style.animationName;
    burger?.addEventListener('click', () => {
      if (nav != 'opened') {
        navi.style.animationName = 'opened';
      } else {
        navi.style.animationName = 'closed';

      }
    });
  }
};

