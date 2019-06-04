import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-officers',
  templateUrl: './admin-officers.component.html',
  styleUrls: ['./admin-officers.component.scss']
})
export class AdminOfficersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  officers=[
    {
      field:'National Institutional Ranking Framework',
      pic: 'assets/images/img_avatar.png',
      name: 'Dr.Anonymous',
      designation: 'Professor ',
      department: 'Computer Science and Engineering',
      address: 'National Institute of Technology Puducherry , Thiruvettakudy, Karaikal - 609609',
      contactTel: ' 91-11-23015321',
      contactMail: ' registrar@nitpy.ac.in'
    },
    {
      field:'National Knowledge Network Connectivity',
      pic: 'assets/images/img_avatar.png',
      name: 'Dr.Anonymous',
      designation: 'Professor ',
      department: 'Computer Science and Engineering',
      address: 'National Institute of Technology Puducherry , Thiruvettakudy, Karaikal - 609609',
      contactTel: ' 91-11-23015321',
      contactMail: ' registrar@nitpy.ac.in'
    },
    {
      field:'Liaison Officer ',
      pic: 'assets/images/img_avatar.png',
      name: 'Dr.Anonymous',
      designation: 'Professor ',
      department: 'Computer Science and Engineering',
      address: 'National Institute of Technology Puducherry , Thiruvettakudy, Karaikal - 609609',
      contactTel: ' 91-11-23015321',
      contactMail: ' registrar@nitpy.ac.in'
    },
    {
      field:'Global initiative of Academic Networks',
      pic: 'assets/images/img_avatar.png',
      name: 'Dr.Anonymous',
      designation: 'Professor ',
      department: 'Computer Science and Engineering',
      address: 'National Institute of Technology Puducherry , Thiruvettakudy, Karaikal - 609609',
      contactTel: ' 91-11-23015321',
      contactMail: ' registrar@nitpy.ac.in'
    }
]
  
}
