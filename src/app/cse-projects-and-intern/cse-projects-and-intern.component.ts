import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cse-projects-and-intern',
  templateUrl: './cse-projects-and-intern.component.html',
  styleUrls: ['./cse-projects-and-intern.component.scss']
})
export class CseProjectsAndInternComponent implements OnInit {

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
