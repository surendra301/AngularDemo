import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Router } from '@angular/router';
//import { employeeService } from './employee';

@Component({
  selector: 'app-createemployee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
 // @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null
  };
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];
  datePickerConfig: Partial<BsDatepickerConfig>;
  previewPhoto = false;
  constructor() {
    this.datePickerConfig = Object.assign({}, {
      ontainerClass: 'theme-dark-blue',
      dateInputFormat: 'DD/MM/YYYY'
    });
  }


  ngOnInit() {
  }
  saveEmployee(employee: Employee): void {
    const newEmployee: Employee = Object.assign({}, this.employee);
 
  }
  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
    alert(this.previewPhoto);
  }

}
