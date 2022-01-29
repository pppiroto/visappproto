import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { MasterKeyValue } from '../models/masterKeyValue';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }
  
  getBaseUrl(): string {
    return this.baseUrl;
  }

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


