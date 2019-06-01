import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic-calendar',
  templateUrl: './academic-calendar.component.html',
  styleUrls: ['./academic-calendar.component.scss']
})
export class AcademicCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cal = [
    {
      title: 'This is an calendar title',
      url: '#'
    }
  ];
}
