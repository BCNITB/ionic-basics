import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name: string;
  surename1: string;
  surename2: string;

  constructor(private navCtrl: NavController){ }

  erase(){
    this.name=null;
    this.surename1=null;
    this.surename2=null;
  }

  send(){
    console.log('El teu nom ', this.name);
    console.log('El teu primer cognom ', this.surename1);
    console.log('El teu segon cognom ', this.surename2);
    this.erase();

    this.navCtrl.navigateForward('/page2');
  }
}
