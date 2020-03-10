import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math-projects-and-intern',
  templateUrl: './math-projects-and-intern.component.html',
  styleUrls: ['./math-projects-and-intern.component.scss']
})
export class MathProjectsAndInternComponent implements OnInit {

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
