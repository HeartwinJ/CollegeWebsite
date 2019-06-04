import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-registrar',
  templateUrl: './admin-registrar.component.html',
  styleUrls: ['./admin-registrar.component.scss']
})
export class AdminRegistrarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registrar = [{
    pic: 'assets/images/img_avatar.png',
    name: 'Dr.Sethuraman',
    designation: 'Registrar ',
    address: 'National Institute of Technology Puducherry , Thiruvettakudy, Karaikal - 609609',
    contactTel: 'Telephone: 91-11-23015321',
    contactMail: 'Mail: registrar@nitpy.ac.in'
  }]
}
