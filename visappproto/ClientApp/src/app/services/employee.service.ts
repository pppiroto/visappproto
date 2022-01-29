import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employee } from '../models/employee';
import { MasterKeyValue } from '../models/masterKeyValue';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  /**
   * @see https://angular.jp/tutorial/toh-pt4
   * @see https://angular.jp/tutorial/toh-pt6
   */
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + 'employees');
  }
  
  firstNameAutoComplete(keyword: string) : Observable<MasterKeyValue[]> {
    // return this.http.get<MasterKeyValue[]>(this.baseUrl + 'autocomplete/employeefirstname?keyword=' + keyword);
    return this.http.get<MasterKeyValue[]>(this.baseUrl + 'autocomplete');
  }
}


