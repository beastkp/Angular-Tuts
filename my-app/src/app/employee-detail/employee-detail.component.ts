import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  //here the component decorator specifies to angular that it might use dependencies so injectable decorator is not used here 
  selector: 'app-employee-detail',
  template: `
    <div>
      <h2>this is employee detials</h2>
      <ul *ngFor="let employee of Employees">
        <li>{{employee.id}}.{{employee.name}} - {{employee.age}}</li>
      </ul>
    </div>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public Employees:{id:number,name:string,age:number}[]=[];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.Employees = this._employeeService.getEmployees();
    console.log(this.Employees);
    
  }

}
