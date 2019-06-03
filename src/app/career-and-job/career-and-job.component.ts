import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career-and-job',
  templateUrl: './career-and-job.component.html',
  styleUrls: ['./career-and-job.component.scss']
})
export class CareerAndJobComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  job = [
    {
      title: "heading1",
      children: [
        {
          title: 'no1',
          url: ''
        },{
          title: 'no2',
          url: ''
        },{
          title: 'no3',
          url: ''
        },
      ]
    },{
      title: "heading2",
      children: [
        {
          title: 'no1',
          url: ''
        },{
          title: 'no2',
          url: ''
        },
      ]
    },
  ];

}
