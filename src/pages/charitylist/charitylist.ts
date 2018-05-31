import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharityPage } from '../charityprofile/charityprofile';
import { Charity } from '../../models/charity';

@IonicPage()
@Component({
  selector: 'page-charitylist',
  templateUrl: 'charitylist.html',
})
export class CharitylistingPage {

  public charities: Array<Charity> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      var charity1 = new Charity();
      charity1.name = "Red Cross";
      charity1.description = "Details...";
      charity1.amtRaised = 125;
      charity1.goalAmt = 500;

      var charity2 = new Charity();
      charity2.name = "Ipourlife";
      charity2.description = "Details...";
      charity2.amtRaised = 30;
      charity2.goalAmt = 150;
      
      this.charities.push(charity1);
      this.charities.push(charity2);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharitylistingPage');
  }

  charitySelected(charity: any) {
    this.navCtrl.push(CharityPage, {
      charity: charity
    });
  }

  // getCharities(charity: any) {
  //   let val = this.charities.name.target.value;
  //   if (val && val.trim() != '') {
  //     this.charities.name = this.charities.name.filter((charity) => {
  //       return (charity.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }

  // }

}
