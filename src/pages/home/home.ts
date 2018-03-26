import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var testvar;
declare var testFn;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title=testvar;
  subtitle=testFn();
  constructor(public navCtrl: NavController) {

  }

}
