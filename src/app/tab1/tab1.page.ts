import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']

})
export class Tab1Page {
  timePerCycle = 1/1200;
  calcInterval: any;
  plugged = false;
  static unitPrice = 10;
  static Unitrange = "61-90";
  cost = 0;
  static days = [];
  static daysIndex = 0;
  static lastDate:Date ;
  x;
  Watt;
  
  
  constructor(private storage: Storage) { }
  async onClickMe(Watt) {
    if (this.plugged) {
      
      this.calcInterval =  setInterval(async () => {
        console.log("new cycle")
        let intervalCost = parseInt(Watt)*0.001 * this.timePerCycle*Tab1Page.unitPrice
        this.cost = this.cost + intervalCost;
        console.log("awa")
        
        console.log("cost: "+this.cost);
        await this.addToDB(intervalCost);
        let day = new Date().setHours(0,0,0,0).toString()
        console.log("day value: "+await this.getFromDB(day))
        console.log("end cycle")
        if (!this.plugged) {
          clearInterval(this.calcInterval);
        }
        
      }, 3000)
    }

  }


  async getFromDB(day){
    let returnValue
    console.log("came here")
    await this.storage.get(day).then((val)=>{
      returnValue=val
    })
    return returnValue;
 }


  async addToDB(value){
    let d = new Date().setHours(0,0,0,0).toString()
    if(await this.getFromDB(d)==null){
      console.log("came if")
      await this.storage.set(d,value)

    }
    else{
      console.log("came else")
      let newValue;
       newValue = await this.getFromDB(d) + value
       await this.storage.set(d,newValue)
       console.log("new value: "+newValue)
    }
    console.log("d: "+d)
  }

  get UnitrangeNow(){
    return Tab1Page.Unitrange;
  }

  
  setTrue() {
    this.plugged = !this.plugged;
  }
}
