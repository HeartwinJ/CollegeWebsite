import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-humanities-projects-and-intern',
  templateUrl: './humanities-projects-and-intern.component.html',
  styleUrls: ['./humanities-projects-and-intern.component.scss']
})
export class HumanitiesProjectsAndInternComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  projects = [
    {
      title: 'This is an Projects title',
      url: '#'
    },
  ];
}
