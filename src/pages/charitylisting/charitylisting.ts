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
      { name: 'Red Cross', description: 'Details...', amtRaised: '125', goalAmt: '500', website: '' },
      { name: 'Ipourlife', description: 'Details...', amtRaised: '30', goalAmt: '150', website: '' }
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
      goalAmt: charity.goalAmt,
      website: charity.website
    });
  };

  getCharities(charity: any) {
    let val = this.charities.name.target.value;
    if (val && val.trim() != '') {
      this.charities.name = this.charities.name.filter((charity) => {
        return (charity.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

  }

}
