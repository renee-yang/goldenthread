import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-charity',
  templateUrl: 'charity.html',
})
export class CharityPage {

  public name: string;
  public description: string;
  public amtRaised: number;
  public goalAmt: number;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = this.navParams.get("name");
    this.description = this.navParams.get("description");
    this.amtRaised = this.navParams.get("amtRaised");
    this.goalAmt = this.navParams.get("goalAmt");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityPage');
  }


}
