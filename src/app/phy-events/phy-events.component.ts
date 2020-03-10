import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phy-events',
  templateUrl: './phy-events.component.html',
  styleUrls: ['./phy-events.component.scss']
})
export class PhyEventsComponent implements OnInit {

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
