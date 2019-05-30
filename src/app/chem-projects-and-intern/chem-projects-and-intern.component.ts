import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chem-projects-and-intern',
  templateUrl: './chem-projects-and-intern.component.html',
  styleUrls: ['./chem-projects-and-intern.component.scss']
})
export class ChemProjectsAndInternComponent implements OnInit {

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
