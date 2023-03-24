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
      img: "https://cdn.bunniktours.com.au/public/gallery_images/Europe/Alpine%20Discovery/EU%20-%20Switzerland%20-%20Zurich%20by%20Mirza%20Ariadi-feature.jpg",
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
    let btn = document.getElementById('btn') as HTMLElement;
    btn?.classList.toggle('buttonActive');
  };


  //-------------------- Open Cart Pop-up ---------------------------------//
  ShowCartDiv() {
    let cartDiv = document.getElementById('cartContainer') as HTMLElement;
    let cartDisplay = window.getComputedStyle(cartDiv).getPropertyValue('display');
    if (cartDisplay === 'none') {
      cartDiv.style.display = 'block';
    } else {
      cartDiv.style.display = 'none';
    };
  };


  //-------------------- Close Cart Pop-up ---------------------------------//
  CloseDiv() {
    let el = document.getElementById('cartContainer') as HTMLInputElement;
    if (el.style.display !== 'none') {
      el.style.display = 'none';
    };
  };

  //-------------------- Open details Pop-up ---------------------------------//
  ShowCartDiv_1() {
    let cartDiv = document.getElementById('container_2') as HTMLElement;
    let cartDisplay = window.getComputedStyle(cartDiv).getPropertyValue('display');
    if (cartDisplay === 'none') {
      cartDiv.style.display = 'block';
    } else {
      cartDiv.style.display = 'none';
    };
  };

  //-------------------- Close details Pop-up ---------------------------------//
  CloseDiv_1() {
    let el = document.getElementById('container_2') as HTMLInputElement;
    if (el.style.display !== 'none') {
      el.style.display = 'none';
    };
  };


  //[(ngModel)]=''
  pieceOfProduct = document.getElementById('res') as HTMLInputElement | null;
  pieceOfProduct_1 = this.pieceOfProduct?.value;


  //---------------------- onClick get td price give back for calc ---------------//
  flight1_e() {
    let price = document.getElementById('h33') as HTMLElement;
    let a = document.querySelector('.Price1') as HTMLElement;
    let b: any = a?.innerHTML;
    let numb1: any = b.match(/\d/g);
    let numb2 = numb1.join("");
    let pr = Number(this.pieceOfProduct_1) * numb2;
    price.innerHTML = `${pr.toString()} USD  for ${Number(this.pieceOfProduct_1)} Person incl. Tax`;

    let pieceOfProduct = document.getElementById('res') as HTMLInputElement | null;
    let pieceOfProduct_1 = pieceOfProduct?.value;

    if (this.pieceOfProduct_1 == '0' || pieceOfProduct_1 == '') {
      let price = document.getElementById('h33') as HTMLElement;
      price.innerHTML = '';
    }
  }


  flight2_e() {
    let price = document.getElementById('h33') as HTMLElement;
    let a = document.querySelector('.Price2') as HTMLElement;
    let b: any = a?.innerHTML;
    let numb2: any = b.match(/\d/g);
    let numb = numb2.join("");
    let pr = Number(this.pieceOfProduct_1) * numb;
    price.innerHTML = `${pr.toString()} USD  for ${Number(this.pieceOfProduct_1)} Person incl. Tax`;

    let pieceOfProduct = document.getElementById('res') as HTMLInputElement | null;
    let pieceOfProduct_1 = pieceOfProduct?.value;

    if (this.pieceOfProduct_1 == '0' || pieceOfProduct_1 == '') {
      let price = document.getElementById('h33') as HTMLElement;
      price.innerHTML = '';
    }
  }


  flight3_e() {
    let price = document.getElementById('h33') as HTMLElement;
    let a = document.querySelector('.Price3') as HTMLElement;

    let b: any = a?.innerHTML;
    let numb3: any = b.match(/\d/g);
    let numb = numb3.join("");
    let pr = Number(this.pieceOfProduct_1) * numb;
    price.innerHTML = `${pr.toString()} USD  for ${Number(this.pieceOfProduct_1)} Person incl. Tax`;

    let pieceOfProduct = document.getElementById('res') as HTMLInputElement | null;
    let pieceOfProduct_1 = pieceOfProduct?.value;

    if (this.pieceOfProduct_1 == '0' || pieceOfProduct_1 == '') {
      let price = document.getElementById('h33') as HTMLElement;
      price.innerHTML = '';
    };
  };
  /*---------------------------- footer datum live------------- */
  datum: string = new Date().toString();
  /*---------------- searching on price/flight etc. ------------- */
  szuro!: string;
};


