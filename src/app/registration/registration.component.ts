import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  Regexp():void {
    const event = document.getElementById('btnReg');
    event?.addEventListener('click', () => {
      let a: any = document.getElementById('email') as HTMLElement | null;
      let d: any = document.getElementById('password') as HTMLElement | null;
      let e: any = document.getElementById('password_again') as HTMLElement | null;

      let email: any = a.value;
      let password: any = d.value;
      let passwordAgain: any = e.value;
console.log(email)
      let regexEmail: RegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      let regexPasswort: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/;


      if (!(regexEmail.test(email))) {
        alert('Not valid e-mail address!');
      } else if (!(regexPasswort.test(password))) {
       alert('The password must be min. 5 character and must contain min. 1 uppercase + min. 1 lowercase + sign!');
      } else if (password !== passwordAgain) {
        alert('The passwords do not match!');
      }
    })

  }

}
