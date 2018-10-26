import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Surendra',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'surendra.k@gmail.com',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/surendra.png'
    },
    {
      id: 2,
      name: 'Shyama',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/shyama.png'
    },
    {
      id: 3,
      name: 'Ritesh',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: 'IT',
      isActive: false,
      photoPath: 'assets/images/ritesh.png'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
