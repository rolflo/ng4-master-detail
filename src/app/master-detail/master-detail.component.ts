import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MasterDetail } from "./models/master-detail.model";

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.scss']
})
export class MasterDetailComponent implements OnInit {

  public selectedItem: MasterDetail[];
  public selectedDetail: any[];
  
  /* Master-Detail component
   * masterTitle: 主檔標題
   * inputData: 輸入的資料本體
   * cols: 輸入的明細檔欄位名, 標題名[{field:col1, header: con1Name}, ...]
   * detailSelectMod: 明細檔單複選 (multiple/single)
   * sortMod: 明細欄位排序功能
   * deleteMod: 明細欄位刪除功能
   * onSelectDetail: 已選擇的明細資料
   * onEditedData: 修改後的資料本體
   * onEditMaster: 已選的單筆主檔資料
   * onEditDetail: 已選的單筆明細資料
   */

  @Input() masterTitle: string;                          
  @Input() inputData: MasterDetail[];
  @Input() columns: any[];
  @Input() detailSelectMode: string;
  @Input() isSort: boolean;
  @Input() isDelete: boolean;

  @Output() onSelectDetail = new EventEmitter<any>();
  @Output() onEditedData = new EventEmitter<any>();
  @Output() onEditMaster = new EventEmitter<any>();
  @Output() onEditDetail = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {

  }
  //新增一筆主檔 
  public addMaster(value) {
    let newData:MasterDetail[] = this.inputData.concat({master: value,detail:[]});
    this.inputData = [];
    this.inputData = newData;    
  }
  //新增一筆明細
  public addDetail(col: any) {
    let newDetail = this.selectedItem['detail'].concat(col);
    this.selectedItem['detail'] = [];
     this.selectedItem['detail'] = newDetail;
  }
  //移除一筆主檔
  private removeMaster(row) {
    this.inputData = this.inputData.filter(element => { return element != row});
    this.selectedItem = [];
  }
  //移除一筆明細
  private removeDetail(row) {
    this.selectedItem['detail'] = this.selectedItem['detail'].filter(element => { return element != row});
  }
  //發送要修改的master event
  public  editMaster() {   
    this.onEditMaster.emit(this.selectedItem);
  }
  //接收修改後的master 參數
  public editedMaster(masterName) {
    this.selectedItem['master'] = masterName;
  }
  //發送要修改的detail event
  public  editDetail(row) {
    this.onEditDetail.emit(row.data); 
  }
  //發送選擇到的明細和修改後的 master-detail
  public onSelectedDetail() {
    this.onSelectDetail.emit(this.selectedDetail);
    this.onEditedData.emit(this.inputData);
  }
 
}
