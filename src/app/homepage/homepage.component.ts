import { HtmlParser } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  ToursData = [
    {
      country: "Vietnam",
      img: "https://www.planet-wissen.de/kultur/asien/vietnam/vietnam-landschaft-100~_v-gseapremiumxl.jpg",
      text: "Explore the beautiful nature in Vietnam"
    },
    {
      country: "USA",
      img: "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-01/Getty_515070156_EDITORIALONLY_LosAngeles_HollywoodBlvd_Web72DPI_0.jpg?h=0a8b6f8b&itok=lst_2_5d",
      text: "Explore the beautiful LA"
    },
    {
      country: "Italy",
      img: "https://cdn.travelpulse.com/images/31aaedf4-a957-df11-b491-006073e71405/bb73aab8-f2bf-4278-88c3-33dd628df23f/630x355.jpg",
      text: "Explore the beautiful Italy"
    },
    {
      country: "Maldives",
      img: "https://www.gannett-cdn.com/media/2023/01/10/USATODAY/usatsports/The-Ritz-Carlton.jpg",
      text: "Explore the beautiful Maldives"
    },
    {
      country: "Hungary",
      img: "https://i.natgeofe.com/k/e965ea18-80fa-4205-a1df-3ec327ddb567/hungary-budapest.jpg",
      text: "Explore the beautiful Hungary"
    },
    {
      country: "Switzerland",
      img: "https://www.wanderluststorytellers.com/wp-content/uploads/2017/10/Most-Beautiful-Places-in-Switzerland-1080x720.jpg",
      text: "Explore the beautiful Switzerland"
    },
  ];

  Product = [
    {
      country: "Vietnam",
      flight: ["Swiss Airlines", "Delta", "Russian Airlines"],
      priceProFlight: [1323, 1300, 1280],
    },
    {
      country: "USA",
      flight: ["Swiss Airlines", "Delta", "Russian Airlines"],
      priceProFlight: [1200, 1000, 900],
    },
    {
      country: "Italy",
      flight: ["Swiss Airlines", "Delta", "Russian Airlines"],
      priceProFlight: [250, 230, 200],
    },
    {
      country: "Maldives",
      flight: ["Swiss Airlines", "Delta", "Russian Airlines"],
      priceProFlight: [2000, 2200, 990],
    },
    {
      country: "Hungary",
      flight: ["Swiss Airlines", "Delta", "Russian Airlines"],
      priceProFlight: [180, 170, 130],
    },
    {
      country: "Switzerland",
      flight: ["Swiss Airlines", "Delta", "Russian Airlines"],
      priceProFlight: [200, 220, 250],
    },
  ];


  Rotate(): void {
    let btn = document.getElementById('btn');
    btn?.addEventListener('click', () => {
      btn?.classList.toggle('buttonActive')
    })
  };


  CalculatorEndAmount() {
    let buttonEvent = document.getElementById('btnBuy');
    buttonEvent?.addEventListener('click', () => {
      let pieceOfProduct = document.getElementById('feld') as HTMLInputElement | null;
      let pieceOfProduct_1 = Number(pieceOfProduct?.value);

      const nav = document.getElementById('nav');
      buttonEvent?.addEventListener('click', () => {
        nav?.classList.toggle('menu-active');
      });




      function ProductCalc(nu: number) {
        nu *= 1.27;
        return nu
      };


    })
  };

  //-------------------- Close Cart Pop-up ---------------------------------//
  CloseDiv() {
    const el = document.getElementById('cartContainer');
    const btn = document.getElementById('close');

    if (el != null && btn != null) {
      btn.addEventListener('click', function handleClick() {
        if (el.style.display !== 'none') {
          el.style.display = 'none';
        }
      });
    }

  };
  //-------------------- Open Cart Pop-up ---------------------------------//
  ShowCartDiv() {
    const cont = document.getElementById('cartContainer');
    const btn = document.getElementById('btnBuy');

    if (cont != null && btn != null) {
      btn.addEventListener('click', function handleClick() {
        if (cont.style.display === 'none') {
          cont.style.display = 'block';
        }
      });
    }

  };

  
  //[(ngModel)]='pieceOfPruduct_1'
  pieceOfProduct = document.getElementById('feld') as HTMLInputElement | null;
  pieceOfProduct_1: number = Number(this.pieceOfProduct?.value);
  






};


