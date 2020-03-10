import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-humanities-events',
  templateUrl: './humanities-events.component.html',
  styleUrls: ['./humanities-events.component.scss']
})
export class HumanitiesEventsComponent implements OnInit {

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
