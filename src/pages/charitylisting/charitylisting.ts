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
      'red cross',
      'peta',
      'miracle for smiles'
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharitylistingPage');
  }

  navigateToCharityProject() {
    this.navCtrl.push(CharityPage);
  }

  charitySelected(charity) {
    this.navCtrl.push(CharityPage, {});
  };

}
