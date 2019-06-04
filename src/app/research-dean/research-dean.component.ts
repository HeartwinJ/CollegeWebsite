import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-dean',
  templateUrl: './research-dean.component.html',
  styleUrls: ['./research-dean.component.scss']
})
export class ResearchDeanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  research=[
    {
      pic:'assets/images/img_avatar.png',
      name:'Anonymous',
      mail:'mail@mail.com',
      phone:'123456789'
    }
  ]

  consultancy=[
    {
      pic:'assets/images/img_avatar.png',
      name:'Anonymous',
      mail:'mail@mail.com',
      phone:'123456789'
    }
  ]

}
