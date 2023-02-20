import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projekt1';

 
  datum:string = new Date().toString();


  EaseInOut(): void {
    const burger = document.getElementById('burgerMenu');
    const nav = document.getElementById('nav');
    burger?.addEventListener('click', () => {
      nav?.classList.toggle('menu-active');
      burger?.classList.remove('fa-solid fa-bars fa-xl');
      burger?.classList.add('fa-solid fa-phone-volume');
    });
  };
};

