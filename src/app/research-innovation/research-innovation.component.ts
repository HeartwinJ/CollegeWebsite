import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-innovation',
  templateUrl: './research-innovation.component.html',
  styleUrls: ['./research-innovation.component.scss']
})
export class ResearchInnovationComponent implements OnInit {

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
