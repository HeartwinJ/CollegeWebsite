import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mech-projects-and-intern',
  templateUrl: './mech-projects-and-intern.component.html',
  styleUrls: ['./mech-projects-and-intern.component.scss']
})
export class MechProjectsAndInternComponent implements OnInit {

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
