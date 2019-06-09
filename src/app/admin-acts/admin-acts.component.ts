import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-acts',
  templateUrl: './admin-acts.component.html',
  styleUrls: ['./admin-acts.component.scss']
})
export class AdminActsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  file=[
    {
      url:'',
      filename:'Act, Statutes & Schedule',
    },
    {
      url:'',
      filename:'Ammendements in the Statutes',
    },
  ]
}
