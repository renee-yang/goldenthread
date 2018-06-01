import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';
import { CharitylistingPage } from '../charitylist/charitylist';
import { PortfolioPage } from '../portfolio/portfolio';
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  } 

  navigateToLogin() {
    this.navCtrl.push(LoginPage);
  }

  navigateToRegistration() {
    this.navCtrl.push(RegistrationPage);
  }

  navigateToCharityListing() {
    this.navCtrl.push(CharitylistingPage);
  }
  
}
