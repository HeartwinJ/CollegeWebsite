import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mech-events',
  templateUrl: './mech-events.component.html',
  styleUrls: ['./mech-events.component.scss']
})
export class MechEventsComponent implements OnInit {

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
