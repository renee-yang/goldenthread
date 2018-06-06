import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CharitylistingPage } from '../charitylist/charitylist';
import { PortfolioPage } from '../portfolio/portfolio';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  charityListingRoot = CharitylistingPage
  portfolioRoot = PortfolioPage
  profileRoot = ProfilePage


  constructor(public navCtrl: NavController) {}

}
