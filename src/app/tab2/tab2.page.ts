import { Component } from '@angular/core';
import { Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  unitPrice0060 = 7.85;
  unitPrice6190 = 10;
  unitPrice91120 = 27.75;
  unitPrice121180 = 32;
  unitPrice180p = 45;
  

  constructor() {}
  rng0060(){
    Tab1Page.unitPrice = this.unitPrice0060;
    Tab1Page.Unitrange = "0-60";
    console.log("awaaa");
    console.log(this.unitPrice0060)
    console.log(Tab1Page.Unitrange)
  }
  rng6190(){
    Tab1Page.unitPrice = this.unitPrice6190;
    Tab1Page.Unitrange = "61-90";
    console.log("awaaa");
    console.log(this.unitPrice6190)
  }
  rng91120(){
    Tab1Page.unitPrice = this.unitPrice91120;
    Tab1Page.Unitrange = "91-120";
    console.log("awaaa");
    console.log(this.unitPrice91120)
  }
  rng121180(){
    Tab1Page.unitPrice = this.unitPrice121180;
    Tab1Page.Unitrange = "121-180";
    console.log("awaaa");
    console.log(this.unitPrice121180)
  }
  rng180p(){
    Tab1Page.unitPrice = this.unitPrice180p;
    Tab1Page.Unitrange = "180+";
    console.log("awaaa");
    console.log(this.unitPrice180p)
  }
  
}
