import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharityPage } from './charityprofile';

@NgModule({
  declarations: [
    CharityPage,
  ],
  imports: [
    IonicPageModule.forChild(CharityPage),
  ],
})
export class CharityProfilePageModule {}