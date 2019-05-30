import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-download',
  templateUrl: './forms-download.component.html',
  styleUrls: ['./forms-download.component.scss']
})
export class FormsDownloadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Edit this for the Faculty/Staff Forms
  faculty = [
    {
      title: "staffTest",
      url: "test.pdf"
    },
  ];
  
  //Edit this for the Student Forms
  students = [
    {
      title: "studentTest",
      url: "test.pdf"
    },
  ];
  
  //Edit this for the General Forms
  general = [
    {
      title: "generalTest",
      url: "test.pdf"
    },
  ];
  
  //Edit this for the Other Forms
  other = [
    {
      title: "otherTest",
      url: "test.pdf"
    },
  ];
  
  //Edit thi for the forms related to stores and purchase
  stores = [
    {
      title: "storesTest",
      url: "test.pdf"
    },
  ];
  
  //Edit thi for the forms related to academics
  academics = [
    {
      title: "academicsTest",
      url: "test.pdf"
    },
  ];

}
