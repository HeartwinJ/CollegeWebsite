import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fp-civil',
  templateUrl: './fp-civil.component.html',
  styleUrls: ['./fp-civil.component.scss']
})
export class FpCivilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  project=[
    {
      title:'Synthesis and Characterisation',
      fund: 'ABC Inc.',
      investigator: 'Dr.Anonymous',
      designation: 'Professor',
      dept: 'Civil Engineering',
      budget: 'Amount : Rs.xxxx Lakhs with collaborative support'
    },
    {
      title:'Synthesis and Characterisation',
      fund: 'ABC Inc.',
      investigator: 'Dr.Anonymous',
      designation: 'Professor',
      dept: 'Civil Engineering',
      budget: 'Amount : Rs.xxxx Lakhs with collaborative support'
    }
  ]
}
