package com.getarrays.employeemanger.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.getarrays.employeemanger.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
