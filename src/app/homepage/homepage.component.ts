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
      text: "Explore the beautiful nature in Vietnam",

    },
    {
      country: "USA",
      img: "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-01/Getty_515070156_EDITORIALONLY_LosAngeles_HollywoodBlvd_Web72DPI_0.jpg?h=0a8b6f8b&itok=lst_2_5d",
      text: "Explore the beautiful LA",

    },
    {
      country: "Italy",
      img: "https://cdn.travelpulse.com/images/31aaedf4-a957-df11-b491-006073e71405/bb73aab8-f2bf-4278-88c3-33dd628df23f/630x355.jpg",
      text: "Explore the beautiful Italy",

    },
    {
      country: "Maldives",
      img: "https://www.gannett-cdn.com/media/2023/01/10/USATODAY/usatsports/The-Ritz-Carlton.jpg",
      text: "Explore the beautiful Maldives",

    },
    {
      country: "Hungary",
      img: "https://i.natgeofe.com/k/e965ea18-80fa-4205-a1df-3ec327ddb567/hungary-budapest.jpg",
      text: "Explore the beautiful Hungary",

    },
    {
      country: "Switzerland",
      img: "https://www.wanderluststorytellers.com/wp-content/uploads/2017/10/Most-Beautiful-Places-in-Switzerland-1080x720.jpg",
      text: "Explore the beautiful Switzerland",

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
      flight: ["Lufthansa", "Wizzair", "British Airways"],
      priceProFlight: [1200, 5000, 1200],
    },
    {
      country: "Italy",
      flight: ["EasyJet", "Delta", "FinnAir"],
      priceProFlight: [250, 230, 200],
    },
    {
      country: "Maldives",
      flight: ["Pan America", "Delta", "WizzAir"],
      priceProFlight: [2000, 2200, 990],
    },
    {
      country: "Hungary",
      flight: ["Swiss Airlines", "Delta", "Russian Airlines"],
      priceProFlight: [180, 170, 130],
    },
    {
      country: "Switzerland",
      flight: ["Malev", "Delta", "RyanAir"],
      priceProFlight: [200, 220, 250],
    },
  ];


  //-------------------- Button rotate 360deg on click ---------------------------------// 
  Rotate() {
    const btn = document.getElementById('btn') as HTMLElement;
    btn?.addEventListener('click', () => {
      btn?.classList.toggle('buttonActive')
    })
  };


  //-------------------- Open Cart Pop-up ---------------------------------//
 /* ShowCartDiv() {
    var cartDiv = document.getElementById('cartContainer') as HTMLElement;
    var cartDisplay = window.getComputedStyle(cartDiv).getPropertyValue('display');
    if (cartDisplay === 'none') {
      cartDiv.style.display = 'block';
    } else {
      cartDiv.style.display = 'none';
    }
  }
*/

  //-------------------- Close Cart Pop-up ---------------------------------//
  CloseDiv() {
    var el = document.getElementById('cartContainer') as HTMLElement;
    const btn = document.getElementById('close') as HTMLInputElement;


    btn.addEventListener('click', () => {
      if (el.style.display !== 'none') {
        el.style.display = 'none';
      }
    });

  };


  //[(ngModel)]='pieceOfPruduct_1'
  pieceOfProduct = document.getElementById('res') as HTMLInputElement | null;
  pieceOfProduct_1 = this.pieceOfProduct?.value;

  //-------------------- Avoid NaN ---------------------------------//
  vbn(): void {
    if (Number.isNaN(this.pieceOfProduct_1)) {
      this.pieceOfProduct_1 = '';
    }
  };



 



};


