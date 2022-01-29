import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../models/employee';
import * as wjcCore from '@grapecity/wijmo';
import * as wjcGrid from '@grapecity/wijmo.grid';
import * as input from '@grapecity/wijmo.input';

import { EmployeeService } from '../../services/employee.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [ EmployeeService ]
})
export class EmployeesComponent implements OnInit {

  public employees: Employee[] = [];
  selectedItem: string = "";

  @ViewChild('flex', { static: true })
  flex!: wjcGrid.FlexGrid;

  constructor(private employeeService: EmployeeService) { } 

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

  /** 
   * @param query ユーザーが入力したクエリー文字列
   * @param max 返す項目の最大数
   * @param callback 結果が取得されたときに呼び出すコールバック関数
   * @see https://demo.grapecity.com/wijmo/api/classes/wijmo_input.autocomplete.html#itemssourcefunction
   */
  getItemBySearch(query: string, max: number, callback: Function): void {
    // DIした、httpやサービスを利用できない(Wijmoから、プロパティ/属性バインディングのため？)
    // https://demo.grapecity.com/wijmo/docs/Topics/Input/AutoComplete/Searching
    console.log(`callback : ${callback}`);
    if (!query) {
        callback(null);
        return;
    }


  }

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
  }
}
