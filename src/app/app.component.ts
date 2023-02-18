import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projekt1';

  burgerClass: string = "fa-solid fa-bars fa-xl";
  burgerArrow: string = "fa-solid fa-house";



  EaseInOut(): void {
    const burger = document.getElementById('burgerMenu');
    const nav = document.getElementById('nav');
    burger?.addEventListener('click', () => {
      nav?.classList.toggle('menu-active');
      burger.classList.toggle(this.burgerClass);
      burger.classList.toggle(this.burgerArrow);
    });
  };


};

