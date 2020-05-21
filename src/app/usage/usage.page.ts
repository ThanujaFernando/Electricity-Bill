import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.page.html',
  styleUrls: ['./usage.page.scss'],
})
export class UsagePage implements OnInit {
  myDate = new Date();
  constructor(private storage: Storage) { }

  ngOnInit() {
  } 

  async getFromDB(day){
    let returnValue
    console.log("came here")
    await this.storage.get(day).then((val)=>{
      returnValue=val
    })
    return returnValue;
 }

  async getDateU(){
    let x = new Date(this.myDate).setHours(0,0,0,0)
    let y = await this.getFromDB(x)
    console.log(x)
    console.log(y)



  }
}
