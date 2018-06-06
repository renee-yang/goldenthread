import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { HomePage } from '../home/home';
import { Charity } from '../../models/charity';
import { Chart } from 'chart.js';
import { ProfilePage } from '../profile/profile';
import { CharityPage } from '../charityprofile/charityprofile';

@IonicPage()
@Component({
  selector: 'page-portfolio',
  templateUrl: 'portfolio.html',
})
export class PortfolioPage {

  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;

  //public users: Array<User> = [];
  public user: User;
  public charity: Charity = new Charity();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = new User();
    this.user.firstname = "Renee";
    this.user.lastname = "Yang";
    this.user.profilepicture = "https://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg";
    this.user.location = "Maryland";
    this.user.charities = new Array<Charity>();

    this.charity = this.navParams.get("charity");
  }

  ionViewDidLoad() {
    // this.user.charities = [this.navParams.get("charity")];
    // this.user.charities.unshift(this.navParams.get("charity"));

    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'doughnut',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
      }

    });
  }

  navigateToHome() {
    this.navCtrl.push(HomePage);
  }

  charitySelected(charity: Charity) {
    this.navCtrl.push(CharityPage, {
      charity: charity
    });
  }
}
