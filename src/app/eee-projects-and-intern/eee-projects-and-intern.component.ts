import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eee-projects-and-intern',
  templateUrl: './eee-projects-and-intern.component.html',
  styleUrls: ['./eee-projects-and-intern.component.scss']
})
export class EeeProjectsAndInternComponent implements OnInit {

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
