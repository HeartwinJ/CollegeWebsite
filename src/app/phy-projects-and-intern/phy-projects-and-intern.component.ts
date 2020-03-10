import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phy-projects-and-intern',
  templateUrl: './phy-projects-and-intern.component.html',
  styleUrls: ['./phy-projects-and-intern.component.scss']
})
export class PhyProjectsAndInternComponent implements OnInit {

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
