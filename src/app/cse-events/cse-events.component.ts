import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cse-events',
  templateUrl: './cse-events.component.html',
  styleUrls: ['./cse-events.component.scss']
})
export class CseEventsComponent implements OnInit {

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
