import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharityPage } from '../charity/charity';

@IonicPage()
@Component({
  selector: 'page-charitylisting',
  templateUrl: 'charitylisting.html',
})
export class CharitylistingPage {

  charities: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.charities = [
      {name: 'Red Cross', description: 'Details...', amtRaised: '125', goalAmt: '500'},
      {name: 'Ipourlife', description: 'Details...', amtRaised: '30', goalAmt: '150'}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharitylistingPage');
  }

  charitySelected(charity: any) {
    this.navCtrl.push(CharityPage, {
      name: charity.name,
      description: charity.description,
      amtRaised: charity.amtRaised,
      goalAmt: charity.goalAmt
    });
  };

}
