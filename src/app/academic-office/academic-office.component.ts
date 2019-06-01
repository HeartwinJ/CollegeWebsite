import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic-office',
  templateUrl: './academic-office.component.html',
  styleUrls: ['./academic-office.component.scss']
})
export class AcademicOfficeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  deans = [
    {
      pic: 'assets/images/blank-profile-pic.jpg',
      name: 'Dr.X',
      position: 'Assosciate Dean',
      post: 'Admission - UG',
      email: 'xyz@x.com',
      phone: '+91-1234567890'
    },{
      pic: 'assets/images/blank-profile-pic.jpg',
      name: 'Dr.X',
      position: 'Assosciate Dean',
      post: 'Admission - PG',
      email: 'xyz@x.com',
      phone: '+91-1234567890'
    },
  ];

}
