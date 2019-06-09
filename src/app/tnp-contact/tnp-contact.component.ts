import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tnp-contact',
  templateUrl: './tnp-contact.component.html',
  styleUrls: ['./tnp-contact.component.scss']
})
export class TnpContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  staff=[
    {
      pic: 'assets/images/img_avatar.png',
      name: 'Dr.Narendran Rajagopalan',
      designation: 'Assistant Professor',
      department: 'Computer Science and Engineering',
      address: 'National Institute of Technology Puducherry , Thiruvettakudy, Karaikal - 609609',
      contactTel: ' 91 1234567890',
      contactMail: 'narendran@nitpy.ac.in'
    },
  ]
}
