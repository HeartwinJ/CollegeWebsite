import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sw-culturals',
  templateUrl: './sw-culturals.component.html',
  styleUrls: ['./sw-culturals.component.scss']
})
export class SwCulturalsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  chairperson=[
    {
      pic: 'assets/images/img_avatar.png',
      name: 'Anonymous',
      designation: 'Assistant Professor - CSE', 
    }
  ]
  member = [
    {
      pic: 'assets/images/img_avatar.png',
      name: 'Anonymous',
      designation: 'Assistant Professor - CSE',
    }, {
      pic: 'assets/images/img_avatar.png',
      name: 'Anonymous',
      designation: 'Assistant Professor - CSE',
    }, {
      pic: 'assets/images/img_avatar.png',
      name: 'Anonymous',
      designation: 'Assistant Professor - CSE',
    }, {
      pic: 'assets/images/img_avatar.png',
      name: 'Anonymous',
      designation: 'Assistant Professor - CSE',
    }, {
      pic: 'assets/images/img_avatar.png',
      name: 'Anonymous',
      designation: 'Assistant Professor - CSE',
    }, {
      pic: 'assets/images/img_avatar.png',
      name: 'Anonymous',
      designation: 'Assistant Professor - CSE',
    }, 
  ]
}
