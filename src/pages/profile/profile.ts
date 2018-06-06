import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { User } from '../../models/user'
import { HomePage } from '../home/home';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})

export class ProfilePage {

    public user: User;

    constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
        this.user = new User();
    }

    ionViewDidLoad() {
        this.user.username = this.navParams.get("username");
        this.user.password = this.navParams.get("password");
    }
    
    navigateToHome() {
        this.navCtrl.popToRoot();
        this.app.getRootNav().setRoot(HomePage);
    }
}
