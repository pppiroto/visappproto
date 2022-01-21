import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-simple-data-access',
  templateUrl: './simple-data-access.component.html',
  styleUrls: ['./simple-data-access.component.css']
})
export class SimpleDataAccessComponent implements OnInit {

  public employees: Employee[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Employee[]>(baseUrl + 'simpledataaccess').subscribe(result => {
      this.employees = result;
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

}
interface Employee {
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  hireDate: string;
  jobId: string;
  salary: number;
}