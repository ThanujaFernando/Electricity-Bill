import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']

})
export class Tab1Page {
  timePerCycle = 1/1200;
  calcInterval: any;
  plugged = false;
  cost = 0;
  constructor() { }
  onClickMe(Watt) {
    if (this.plugged) {
      this.calcInterval = setInterval(() => {
        this.cost = this.cost + parseInt(Watt)*0.001 * this.timePerCycle*10;
        console.log("awa")
        console.log(this.cost);
        if (!this.plugged) {
          clearInterval(this.calcInterval);
        }
      }, 3000)
    }

  }

  
  setTrue() {
    this.plugged = !this.plugged;
  }
}
