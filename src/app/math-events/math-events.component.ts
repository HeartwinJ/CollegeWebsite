import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math-events',
  templateUrl: './math-events.component.html',
  styleUrls: ['./math-events.component.scss']
})
export class MathEventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  events = [
    {
      title: 'This is an Event title',
      url: '#'
    },
    {
      title: 'This is an Event title',
      url: '#'
    },
    {
      title: 'This is an Event title',
      url: '#'
    }
  ];
}
