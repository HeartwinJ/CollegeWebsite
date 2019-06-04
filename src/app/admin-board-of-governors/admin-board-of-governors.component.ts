import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-board-of-governors',
  templateUrl: './admin-board-of-governors.component.html',
  styleUrls: ['./admin-board-of-governors.component.scss']
})
export class AdminBoardOfGovernorsComponent implements OnInit {

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
      name:'Dr.Anonymous',
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
