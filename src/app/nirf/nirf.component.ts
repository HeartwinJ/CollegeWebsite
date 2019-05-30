import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nirf',
  templateUrl: './nirf.component.html',
  styleUrls: ['./nirf.component.scss']
})
export class NirfComponent implements OnInit {

  contact: any;

  constructor() { 
    this.contact = [
      {
        name: "Dr. G. Aghila",
        designation: "Professor, Department of CSE",
        phone: "+91 4368 265235 (226)",
        email: "aghila@nitpy.ac.in"
      }
    ];
  }

  ngOnInit() {
  }

  reports19 = [
    {
      title: "nirf 2019",
      url: "test.pdf"
    },
  ];

  reports18 = [
    {
      title: "nirf 2018",
      url: "test.pdf"
    },
  ];

  reports17 = [
    {
      title: "nirf 2017",
      url: "test.pdf"
    },
  ];

}
