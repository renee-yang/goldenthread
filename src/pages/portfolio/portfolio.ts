import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-portfolio',
  templateUrl: 'portfolio.html',
})
export class PortfolioPage {

  public users: Array<User> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var user1 = new User();
    user1.firstname = "Renee";
    user1.lastname = "Yang";
    user1.profilepicture = "https://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg";
    user1.location = "Maryland";
    user1.charities = [, 'y'];

  }

  ionViewDidLoad() {
    
  }

  navigateToHome() {
    this.navCtrl.push(HomePage);
}
}
