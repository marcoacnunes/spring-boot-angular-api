import { EmployeeService } from './employee.service';
import { Component, OnInit } from "@angular/core"
import { HttpErrorResponse } from '@angular/common/http';
import { Employee } from './models/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.Component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public employees!: Employee[];

  constructor(private employeeService: EmployeeService){}

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(employee: Employee, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode ==='add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if(mode ==='edit') {
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if(mode ==='delete') {
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container?.appendChild(button);
    button.click();
  }
  
}

