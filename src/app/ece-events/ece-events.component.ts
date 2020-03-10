import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ece-events',
  templateUrl: './ece-events.component.html',
  styleUrls: ['./ece-events.component.scss']
})
export class EceEventsComponent implements OnInit {

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
