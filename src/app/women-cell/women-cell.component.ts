import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women-cell',
  templateUrl: './women-cell.component.html',
  styleUrls: ['./women-cell.component.scss']
})
export class WomenCellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 member=[
    {
      pic: 'assets/images/img_avatar.png',
      name: 'Anonymous',
      designation: 'Assistant Professor - CSE', 
    },
    {
      pic: 'assets/images/img_avatar.png',
      name: 'Anonymous',
      designation: 'Assistant Professor - CSE', 
    },
  ]
  file=[
    {
      url:'',
      filename:'Activities of the cell during the year 2013-2014',
    },
    {
      url:'',
      filename:'Internal Compliance Committee at NIT Puducherry',
    },
  ]
}
