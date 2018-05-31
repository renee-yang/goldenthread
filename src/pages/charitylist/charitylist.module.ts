import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharitylistingPage } from './charitylist';

@NgModule({
  declarations: [
    CharitylistingPage,
  ],
  imports: [
    IonicPageModule.forChild(CharitylistingPage),
  ],
})
export class CharityListPageModule {}