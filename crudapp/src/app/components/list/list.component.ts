import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees: Employee[] = [];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getEmployees()
    .subscribe((data)=>{
      this.employees=data;
    })
  }

  Edit(employee:Employee): void {
    localStorage.setItem("id", employee.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(employee:Employee): void{
    this.service.deleteEmployee(employee.id)
      alert("Employee deleted successfully!");
      this.router.navigate(["list"]);
    }
  }

