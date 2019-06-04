import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-minutes',
  templateUrl: './admin-minutes.component.html',
  styleUrls: ['./admin-minutes.component.scss']
})
export class AdminMinutesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  bog = [
    {
      title: "Minutes of VIII BoG",
      url: "test.pdf"
    },
    {
      title: "Minutes of VII BoG",
      url: "test.pdf"
    },
    {
      title: "Minutes of VI BoG",
      url: "test.pdf"
    },
    {
      title: "Minutes of V BoG",
      url: "test.pdf"
    },
    
  ];

  senate = [
    {
      title: "Minutes of VIII Senate",
      url: "test.pdf"
    },
    {
      title: "Minutes of VII Senate",
      url: "test.pdf"
    },
    {
      title: "Minutes of VI Senate",
      url: "test.pdf"
    },
    {
      title: "Minutes of V Senate",
      url: "test.pdf"
    },
  ];

  fc = [
    {
      title: "Minutes of VIII Finance Committee",
      url: "test.pdf"
    },
    {
      title: "Minutes of VII Finance Committee",
      url: "test.pdf"
    },
    {
      title: "Minutes of VI Finance Committee",
      url: "test.pdf"
    },
    {
      title: "Minutes of V Finance Committee",
      url: "test.pdf"
    },
    
  ];
}
