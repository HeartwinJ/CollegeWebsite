import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-senate',
  templateUrl: './admin-senate.component.html',
  styleUrls: ['./admin-senate.component.scss']
})
export class AdminSenateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  person=[
    
    {
      no:'1',
      name:'Dr.Sankaranarayanasamy',
      designation:'Director ',
      address:'NITPY Karaikal',
      position:'Chairperson'
    },
    {
      no:'2',
      name:'Dr.Anonymous',
      designation:'Director ',
      address:'Abc Inc',
      position:'Member'
    },
    {
      no:'3',
      name:'Dr.Anonymous',
      designation:'Director ',
      address:'DEF Inc',
      position:'Member'
    },
    {
      no:'4',
      name:'Dr.Anonymous',
      designation:'Assistant Professor ',
      address:'NITPY',
      position:'Member'
    },
    {
      no:'5',
      name:'Dr.Anonymous',
      designation:'Assistant Professor ',
      address:'NITPY',
      position:'Member'
    },
    {
      no:'6',
      name:'Dr.Anonymous',
      designation:'Assistant Professor ',
      address:'NITPY',
      position:'Member'
    },
    {
      no:'7',
      name:'Dr.Anonymous',
      designation:'Assistant Professor ',
      address:'NITPY',
      position:'Member'
    },
    {
      no:'8',
      name:'Dr.Anonymous',
      designation:'Assistant Professor ',
      address:'NITPY',
      position:'Member'
    },
    {
      no:'9',
      name:'Dr.Anonymous',
      designation:'Assistant Professor ',
      address:'NITPY',
      position:'Member'
    }

  ]
}
