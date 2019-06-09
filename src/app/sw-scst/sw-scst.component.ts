import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sw-scst',
  templateUrl: './sw-scst.component.html',
  styleUrls: ['./sw-scst.component.scss']
})
export class SwScstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  staff=[
    {
      pic: 'assets/images/img_avatar.png',
      name: 'Dr.D.Ragupathy',
      designation: 'Assistant Professor',
      department: 'Chemistry',
      address: 'National Institute of Technology Puducherry , Thiruvettakudy, Karaikal - 609609',
      contactTel: ' 91 1234567890',
      contactMail: 'liaisonoffr@nitpy.ac.in '
    },
  ]
}
