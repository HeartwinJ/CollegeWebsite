import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-buildings',
  templateUrl: './admin-buildings.component.html',
  styleUrls: ['./admin-buildings.component.scss']
})
export class AdminBuildingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  person=[
    {
      no:'1',
      name:'Dr.Anonymous',
      designation:'Designation ',
      address:'India',
      position:'Chairperson'
    },
    {
      no:'2',
      name:'Dr.Sankaranarayansamy',
      designation:'Director ',
      address:'NITPY Karaikal',
      position:'Member'
    },
    {
      no:'3',
      name:'Dr.Anonymous',
      designation:'Director ',
      address:'Abc Inc',
      position:'Member'
    },
    {
      no:'4',
      name:'Dr.Anonymous',
      designation:'Director ',
      address:'DEF Inc',
      position:'Member'
    },
    {
      no:'5',
      name:'Dr.Anonymous',
      designation:'Director ',
      address:'GHI Inc',
      position:'Member'
    },
    {
      no:'6',
      name:'Dr.Anonymous',
      designation:'Director ',
      address:'JKL Inc',
      position:'Member'
    }
  ]
}
