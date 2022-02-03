import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as input from '@grapecity/wijmo.input';

import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { MasterKeyValue } from 'src/app/models/masterKeyValue';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {

  public employees: Employee[] = [];
  selectedItem: string = "";
  jobIdList: string[] = [];
  jobId: string = "";

  @ViewChild('flex', { static: true })
  flex!: wjcGrid.FlexGrid;

  constructor(private masterService: MasterService, private employeeService: EmployeeService) { 
    console.log('constructor');
    console.log(`${this.employeeService.getBaseUrl()}`);
  } 

  flexInitialized(flexgrid: wjcGrid.FlexGrid) {
    // sort the data by country
    let sd = new wjcCore.SortDescription('employeeId', true);
    flexgrid.collectionView.sortDescriptions.push(sd);
    flexgrid.collectionView.currentChanged.addHandler(this._updateCurrentInfo.bind(this));
    this._updateCurrentInfo();
  }

  private _updateCurrentInfo() {
    console.log(`this.employeeService = ${this.employeeService}`);
      // this.selectedItem = wjcCore.format(
      //     '国: <b>{country}</b>、売上: <b>{sales:c0}</b>、費用: <b>{expenses:c0}</b>',
      //     this.flex.collectionView.currentItem);
  }

  // JOB_ID データソースロード
  async loadJobIdList() {
    try {
      let jobIdList: MasterKeyValue[] 
        = await this.masterService.getJobIdList().toPromise();
      let buf: string[] = [];
      jobIdList.forEach((mst, idx) =>  buf.push(`${mst.masterValue}`));
      this.jobIdList = buf;
    } catch (error) {
      console.log(error);
    }
  }

  getFirstNameBySearch(query: string, max: number, callback: Function) {
    console.log(this); // this -> AutoCompleteコントロール
    
    if (!query) {
        callback(null);
        return;
    }

    // TODO Service で処理をしたい
    // 本関数は、AutoComplete　のプロパティにセットされるため、
    // ComponentにDIされてたサービスの参照方法が現在不明
    // 最悪この書き方だとしても、同様にDIされるbaseURL を解決する必要がある。。。
    // 
    // Function.prototype.bind() を利用して、変数を束縛する 
    // https://typescript-jp.gitbook.io/deep-dive/main-1/bind
    // アロー関数のチェーン
    // https://typescript-jp.gitbook.io/deep-dive/main-1/currying
    wjcCore.httpRequest(`https://localhost:44472/Autocomplete/EmployeeFirstname?id=${encodeURIComponent(query)}`, {
        success: (xhr: XMLHttpRequest) => {
            let response = JSON.parse(xhr.response);
            callback(response);
        }
    });
  }
  // Service 使用に書き換え From
  async getFirstNameBySearchBindComponent(thisComponent: EmployeesComponent, query: string, max: number, callback: Function) {
    console.log(thisComponent.employeeService); 
    if (!query) {
      callback(null);
      return;
    }
    try {
      let result = await this.masterService.firstNameAutoComplete(query).toPromise();
      console.log(result);
      callback(result);
    } catch(error) {
      console.error(error);
    }
  }
  getFirstNameBySearch2: Function = (query: string, max: number, callback: Function) => 
  this.getFirstNameBySearchBindComponent(this, query, max, callback);
  // Service 使用に書き換え To

  async searchSync() {
    this.employees.splice(0);
    this.employees = [];
    
    // Observable は宣言型で、購読するまで処理が開始されない。Promise は作成時に直ちに実行
    // Observable は多くの値を提供します。Promise は1つです
    try {
      this.employees = await this.employeeService.getEmployees().toPromise();
    } catch(error) {
      console.error(error);
    }
  }

  searchASync() {
    this.employees.splice(0);
    this.employees = [];

    this.employeeService.getEmployees().subscribe(
      result => {
        this.employees = result;
      }, 
      error => {
        console.error(error);
      });
  }

  ngOnInit(): void {
    this.loadJobIdList();
  }

}
