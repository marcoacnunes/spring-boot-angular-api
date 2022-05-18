import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
import { ServiceService } from './../../Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

employee: Employee = new Employee(0,"","","","");

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  Save(employee:Employee){
    this.service.addEmployee(this.employee).subscribe(data=>{
      alert("Successfully Saved!");
      this.router.navigate(["list"]);
    })
  }
}
