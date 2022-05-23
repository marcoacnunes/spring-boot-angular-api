import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Employee } from '../Model/employee';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  employee: Employee[] = [];
  constructor(private http:HttpClient) { }

  GetAllEmployees = 'http://localhost:8080/employee/all';
  AddEmployee = 'http://localhost:8080/employee/add';
  UpdateEmployee = 'http://localhost:8080/employee/update';
  DeleteEmployee = 'http://localhost:8080/employee/delete';
  EmployeeId = 'http://localhost:8080/employee/find';
  
  getEmployees(){
    return this.http.get<Employee[]>(this.GetAllEmployees);
  }

  addEmployee(employee:Employee){
    return this.http.post<Employee>(this.AddEmployee, employee);
  }

  getEmployeeId(id:String){
    return this.http.get<Employee>(this.EmployeeId + "/" + id);
  }

  updateEmployee(employee:Employee){
    return this.http.put<Employee>(this.UpdateEmployee, employee);
  }

  deleteEmployee(id:Number){
    this.http.delete<Employee>(this.DeleteEmployee + "/" + id);
  }

}