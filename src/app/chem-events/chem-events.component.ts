import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chem-events',
  templateUrl: './chem-events.component.html',
  styleUrls: ['./chem-events.component.scss']
})
export class ChemEventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  events = [
    {
      title: 'This is an Event title',
      url: '#'
    }
  ];
}
