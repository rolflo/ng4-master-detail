import { Component, ViewChild } from '@angular/core';
import { MasterDetailComponent } from './master-detail/master-detail.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('masterDetail') masterDetail: MasterDetailComponent;

   displayDialog: boolean = false;
  
  private addMaster(){
    this.displayDialog = true;
    //this.masterDetail.addMaster();
  }

    
  

}
