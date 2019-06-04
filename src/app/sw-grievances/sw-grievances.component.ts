import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sw-grievances',
  templateUrl: './sw-grievances.component.html',
  styleUrls: ['./sw-grievances.component.scss']
})
export class SwGrievancesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  file=[
    {
      url:'',
      filename:'Grievance Form',
    },
  ]
  staff=[
    {
      pic: 'assets/images/img_avatar.png',
      name: 'Dr.Ajay Kumar Mishra',
      designation: 'Assistant Professor',
      department: 'Physics',
      address: 'National Institute of Technology Puducherry , Thiruvettakudy, Karaikal - 609609',
      contactTel: ' 91 1234567890',
      contactMail: ' akmishra@nitpy.ac.in'
    },
  ]
}
