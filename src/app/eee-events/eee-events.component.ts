import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eee-events',
  templateUrl: './eee-events.component.html',
  styleUrls: ['./eee-events.component.scss']
})
export class EeeEventsComponent implements OnInit {

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
