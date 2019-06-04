import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-vigilance',
  templateUrl: './admin-vigilance.component.html',
  styleUrls: ['./admin-vigilance.component.scss']
})
export class AdminVigilanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  vigilance = [{
    pic: 'assets/images/img_avatar.png',
    name: 'Dr.Venkadesan',
    designation: 'Chief Vigilance Officer ',
    address: 'National Institute of Technology Puducherry , Thiruvettakudy, Karaikal - 609609',
    contactTel: 'Telephone: 91-11-23015321',
    contactMail: 'Mail: cvo@nitpy.ac.in'
  }]
}
