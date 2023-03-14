import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {



  /*------------------------ Email and Password Validation ----------- */
  Regexp() {

    const event = document.getElementById('btnReg');
    event?.addEventListener('click', () => {
      const a: any = document.getElementById('email') as HTMLElement | null;
      const d: any = document.getElementById('password') as HTMLElement | null;
      const e: any = document.getElementById('password_again') as HTMLElement | null;

      let password: any = d.value;
      let email: any = a.value;
      let passwordAgain: any = e.value;

      let regexEmail: RegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      let regexPasswort: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/;


      if (!(regexEmail.test(email))) {
        let textEmail = document.querySelector('#smallEmail') as HTMLElement;
        textEmail.innerHTML = 'Invalid e-mail address!';
      } else if (!(regexPasswort.test(password))) {
        let textEmail = document.querySelector('#smallEmail') as HTMLElement;
        textEmail.innerHTML = 'The password must be min. 5 character and must contain min. 1 uppercase + min. 1 lowercase + sign!';
      } else if (password !== passwordAgain) {
        let textEmail = document.querySelector('#smallEmail') as HTMLElement;
        textEmail.innerHTML = 'The passwords do not match!';
      }
    })

  }

  /*------------------ datum footer live ---------------------------- */
  datum: string = new Date().toString();

  /*--------------------------- Password show on click toggle between type text and pass ---------------- */
  PassShow(): void {
    let pass = document.getElementById('password') as HTMLInputElement;
    let passAgain = document.getElementById('password_again') as HTMLInputElement;
    let img1 = document.getElementById('eye1');
    let img2 = document.getElementById('eye2');
    let passs = pass?.getAttribute('type');
    let passsAgain = passAgain?.getAttribute('type');
    img1?.addEventListener('click', () => {
      if (passs == 'text') {
        document.getElementById('password')?.setAttribute('type', 'password');
      } else {
        document.getElementById('password')?.setAttribute('type', 'text');
      }
    });
    img2?.addEventListener('click', () => {
      if (passsAgain == 'text') {
        document.getElementById('password_again')?.setAttribute('type', 'password');
      } else {
        document.getElementById('password_again')?.setAttribute('type', 'text');
      }
    });
  }



}


