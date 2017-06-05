import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.detailSelectMod = 'multiple';
    this.masterTitle = 'Title Name';
    this.inputData = [{master: "item1",detail:[{vin: 'dsad231ff',	year: 2012,	brand: 'VW'	,color: 'Orange'},
                                               {vin: 'gwregre345',	year: 2011,brand: 'Audi'	,color: '	Black'},
                                               {vin: '354htr',	year: 2005,brand: 'Renault'	,color: '	Gray'},
                                               {vin: 'j6w54qgh',	year: 2003,brand: 'BMW'	,color: '	Blue'},
                                               {vin: 'hrtwy34',	year: 1995,brand: 'Mercedes'	,color: '	Orange'}]},
                      {master: "item2",detail:[{vin: 'dsaasdas',	year: 2017,	brand: 'BMW'	,color: 'Blue'},
                                               {vin: 'gwrejdfo45',	year: 2008,brand: 'Audi'	,color: '	Black'},
                                               {vin: '35as5dr',	year: 2011,brand: 'Honda'	,color: '	Yellow'},
                                               {vin: 'j6w5as12d',	year: 2009,brand: 'BMW'	,color: '	Blue'},
                                               {vin: 'hrtas4d6',	year: 1991,brand: 'Volvo'	,color: '	Red'}]},
                      {master: "item3",detail:[{vin: 'dsaddfg5',	year: 2016,	brand: 'VW'	,color: 'Yellow'},
                                               {vin: 'gwresdf46',	year: 2000,brand: 'Audi'	,color: '	Black'},
                                               {vin: '3sdfs45',	year: 1987,brand: 'Volvo'	,color: '	Red'},
                                               {vin: 'j6ht454',	year: 2002,brand: 'Honda'	,color: '	Blue'},
                                               {vin: 'hsdf498',	year: 2015,brand: 'Mercedes'	,color: '	Orange'}]}
                      
    ];

    this.cols = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
    ];

  }
  
  ngOnChanges() {
    this.inputData = this.inputData;
 }
  
  public addMaster(value) {
    let newData:MasterDetail[] = this.inputData.concat({master: value,detail:[]});
    this.inputData = [];
    this.inputData = newData;
    console.log(this.inputData);
    
  }

  public addDetail() {
    let newDetail = this.selectedItem['detail'].concat({vin: 'hsdf498',	year: 2015, brand: 'Mercedes'	,color: '	Orange'});
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
}