import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events = [

  ];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getEvents().subscribe(data => this.events = data);
  }

}
