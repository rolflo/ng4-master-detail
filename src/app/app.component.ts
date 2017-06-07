import { Component, ViewChild, OnInit } from '@angular/core';
import { MasterDetailComponent } from './master-detail/master-detail.component';
import { MasterDetail } from './master-detail/models/master-detail.model'

import { Car } from './car.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('md') masterDetail: MasterDetailComponent;

  private displayDialogMaster: boolean = false;
  private displayDialogDetail: boolean = false;
  private displayEditMaster: boolean = false;
  private displayEditDetail: boolean = false;
  private car: Car = new Car();
  private masterName: string;
  private selectedData: any[];

  private masterTitle: string;
  private inputData: MasterDetail[];
  private cols: any[];
  private detailSelectMod: string;

  ngOnInit() {
    this.detailSelectMod = 'multiple';
    this.masterTitle = 'Title Name';
    this.inputData = [{
      master: "item1", detail: [{ vin: 'dsad231ff', year: 2012, brand: 'VW', color: 'Orange' },
      { vin: 'gwregre345', year: 2011, brand: 'Audi', color: '	Black' },
      { vin: '354htr', year: 2005, brand: 'Renault', color: '	Gray' },
      { vin: 'j6w54qgh', year: 2003, brand: 'BMW', color: '	Blue' },
      { vin: 'hrtwy34', year: 1995, brand: 'Mercedes', color: '	Orange' }]
    },
    {
      master: "item2", detail: [{ vin: 'dsaasdas', year: 2017, brand: 'BMW', color: 'Blue' },
      { vin: 'gwrejdfo45', year: 2008, brand: 'Audi', color: '	Black' },
      { vin: '35as5dr', year: 2011, brand: 'Honda', color: '	Yellow' },
      { vin: 'j6w5as12d', year: 2009, brand: 'BMW', color: '	Blue' },
      { vin: 'hrtas4d6', year: 1991, brand: 'Volvo', color: '	Red' }]
    },
    {
      master: "item3", detail: [{ vin: 'dsaddfg5', year: 2016, brand: 'VW', color: 'Yellow' },
      { vin: 'gwresdf46', year: 2000, brand: 'Audi', color: '	Black' },
      { vin: '3sdfs45', year: 1987, brand: 'Volvo', color: '	Red' },
      { vin: 'j6ht454', year: 2002, brand: 'Honda', color: '	Blue' },
      { vin: 'hsdf498', year: 2015, brand: 'Mercedes', color: '	Orange' }]
    }

    ];

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];

  }

  private addMaster() {    
    this.masterName = "";
    this.displayDialogMaster = true;
  }

  private saveMaster() {
    this.masterDetail.addMaster(this.masterName);
    this.displayDialogMaster = false;
    this.masterName = "";
  }

  private closeMaster() {
    this.displayDialogMaster = false;
    this.displayEditMaster = false;
    this.masterName = "";
  }

  private addDetail() {
    this.car = new Car();
    this.displayDialogDetail = true;
  }

  private saveDetail() {
    this.masterDetail.addDetail({ vin: this.car.vin, year: this.car.year, brand: this.car.brand, color: this.car.color });
    this.displayDialogDetail = false;
    this.car = new Car();
  }

  private closeDetail() {
    this.displayDialogDetail = false;
    this.displayEditDetail = false;
    this.car = new Car();
  }

  public editMaster(event) {
    this.displayEditMaster = true;
    this.masterName = event.master;

  }

  public saveEditMaster() {
    this.masterDetail.editedMaster(this.masterName);
    this.displayEditMaster = false;
    this.masterName = "";
  }

  private editDetail(event) {
     this.car = event;
     this.displayEditDetail = true;
  }

  public saveEditDetail() {
    this.displayEditDetail = false;
  }

  public selectedDetail(event) {    
    console.log(event);
    this.selectedData = event;
  }

  public editedData(event) {
    console.log(event);
  }

  public select() {
    this.masterDetail.onSelectedDetail();
  }
}
