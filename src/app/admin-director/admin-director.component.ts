import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-director',
  templateUrl: './admin-director.component.html',
  styleUrls: ['./admin-director.component.scss']
})
export class AdminDirectorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  director=[
    {
      pic: 'assets/images/img_avatar.png',
      name: 'Dr.K.Sankaranarayanasamy',
      designation: 'Director ',
      address:'National Institute of Technology Puducherry , Thiruvettakudy, Karaikal - 609609',
      contactTel:'Telephone: 91-11-23015321',
      contactMail :'Mail: director@nitpy.ac.in'
      
    }
  ]
}
