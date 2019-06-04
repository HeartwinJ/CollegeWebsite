import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-chairman',
  templateUrl: './admin-chairman.component.html',
  styleUrls: ['./admin-chairman.component.scss']
})
export class AdminChairmanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  chairman=[
    {
      pic: 'assets/images/img_avatar.png',
      name: 'Anonymous',
      designation: 'Chairperson ',
      address:'Address',
      contactTel:'Telephone: 91-11-23015321',
      contactFax :'Fax:  91-11-23017290 / 91-11-23017824 (O)'
      
    }
  ]
}
