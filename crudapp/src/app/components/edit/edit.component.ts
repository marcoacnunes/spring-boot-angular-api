import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employee: Employee = new Employee(0,"","","","");

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Edit();
  }

  Edit() {
   let id = localStorage.getItem("id");
   if(id === null) {
     id = "";
   }
    this.service.getEmployeeId(id)
    .subscribe(data=>{
      this.employee = data;
     })
  }

  Update(employee:Employee) {
    this.service.updateEmployee(employee)
    .subscribe(data=>{
      this.employee = data;
      alert("Updated!");
      this.router.navigate(["list"]);
    })
  }

}
