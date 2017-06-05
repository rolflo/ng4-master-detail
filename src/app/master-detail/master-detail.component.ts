import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MasterDetail } from "./models/master-detail.model";

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.scss']
})
export class MasterDetailComponent implements OnInit {

  private selectedItem: MasterDetail[];
  private selectedDetail: any[];
  
  @Input() masterTitle: string;
  @Input() inputData: MasterDetail[];
  @Input() cols: any[];
  @Input() detailSelectMod: string;

  @Output() onSelectDetail = new EventEmitter<any>();;
  
  constructor() { }

  ngOnInit() {

  }
   
  public addMaster(value) {
    let newData:MasterDetail[] = this.inputData.concat({master: value,detail:[]});
    this.inputData = [];
    this.inputData = newData;
    console.log(this.inputData);
    
  }

  public addDetail(col: any) {
    let newDetail = this.selectedItem['detail'].concat(col);
    this.selectedItem['detail'] = [];
     this.selectedItem['detail'] = newDetail;
    console.log( this.selectedItem['detail']);
  }

  private removeMaster(car) {
    console.log(car);
    this.inputData = this.inputData.filter(element => { return element != car});
  }
  
  private removeDetail(car) {
    console.log(car);
    this.selectedItem['detail'] = this.selectedItem['detail'].filter(element => { return element != car});
  }

  public onRowSelect(event) {
    console.log(event.data);
    //this.modDetail.emit()
  }

  onSelectedDetail() {
    console.log(this.selectedDetail);
    this.onSelectDetail.emit(this.selectedDetail);
  }

  
}
