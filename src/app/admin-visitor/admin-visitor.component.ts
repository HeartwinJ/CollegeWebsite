import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-visitor',
  templateUrl: './admin-visitor.component.html',
  styleUrls: ['./admin-visitor.component.scss']
})
export class AdminVisitorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  visitor=[
    {
      pic: 'assets/images/img_avatar.png',
      name: 'Anonymous',
      designation: 'Honourable  President of India ',
      address:'Rashtrapati Bhavan, New Delhi, India',
      contactTel:'Telephone: 91-11-23015321',
      contactFax :'Fax:  91-11-23017290 / 91-11-23017824 (O)'
      
    }
  ]
}
