import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ece-projects-and-intern',
  templateUrl: './ece-projects-and-intern.component.html',
  styleUrls: ['./ece-projects-and-intern.component.scss']
})
export class EceProjectsAndInternComponent implements OnInit {

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
