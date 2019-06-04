import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sw-dean',
  templateUrl: './sw-dean.component.html',
  styleUrls: ['./sw-dean.component.scss']
})
export class SwDeanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dean=[
    {
      pic:'assets/images/img_avatar.png',
      name:'Anonymous',
      field:'Student Welfare (Boys)',
      mail:'mail@mail.com',
      phone:'123456789'
    }, 
    {
      pic:'assets/images/img_avatar.png',
      name:'Anonymous',
      field:'Student Welfare (Girls)',
      mail:'mail@mail.com',
      phone:'123456789'
    }
  ]
}
