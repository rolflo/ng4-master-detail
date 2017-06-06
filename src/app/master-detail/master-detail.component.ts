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

  @Output() onSelectDetail = new EventEmitter<any>();
  @Output() onEditedData = new EventEmitter<any>();
  @Output() onEditMaster = new EventEmitter<any>();
  @Output() onEditDetail = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {

  }
   
  public addMaster(value) {
    let newData:MasterDetail[] = this.inputData.concat({master: value,detail:[]});
    this.inputData = [];
    this.inputData = newData;
    
  }

  public addDetail(col: any) {
    let newDetail = this.selectedItem['detail'].concat(col);
    this.selectedItem['detail'] = [];
     this.selectedItem['detail'] = newDetail;
  }

  private removeMaster(car) {
    this.inputData = this.inputData.filter(element => { return element != car});
  }
  
  private removeDetail(car) {
    this.selectedItem['detail'] = this.selectedItem['detail'].filter(element => { return element != car});
  }

  public  editMaster() {   
    this.onEditMaster.emit(this.selectedItem);
  }

  public editedMaster(masterName) {
    this.selectedItem['master'] = masterName;
  }

  public  editDetail(car) {
    this.onEditDetail.emit(car.data); 
  }

  onSelectedDetail() {
    this.onSelectDetail.emit(this.selectedDetail);
    this.onEditedData.emit(this.inputData);
  }
 
}
