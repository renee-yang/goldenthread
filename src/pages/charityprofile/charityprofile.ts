import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Charity } from '../../models/charity';
import { PaymentPage } from '../payment/payment';
 
@IonicPage()
@Component({
  selector: 'page-charityprofile',
  templateUrl: 'charityprofile.html',
})
export class CharityPage {

  public charity: Charity;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.charity = this.navParams.get("charity");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityPage');
  }

  navigateToPayment() {
    this.navCtrl.push(PaymentPage);
  }
  
}