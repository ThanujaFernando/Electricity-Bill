import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  z;
  myDate;
  constructor(private storage: Storage) { }

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
    if(y!=null){
      this.z=y
    }
    else{
      this.z=0
    }
    


  }

}
