import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, 
  ModalController, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  dimiss() {
    let data = { 'foo': 'bar'};
    this.viewCtrl.dismiss(data);
  }

}
