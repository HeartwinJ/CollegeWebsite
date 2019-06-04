import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fp-cse',
  templateUrl: './fp-cse.component.html',
  styleUrls: ['./fp-cse.component.scss']
})
export class FpCseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  project=[
    {
      title:'Synthesis and Characterisation',
      fund: 'ABC Inc.',
      investigator: 'Dr.Anonymous',
      designation: 'Professor',
      dept: 'Computer Science and Engineering',
      budget: 'Amount : Rs.xxxx Lakhs with collaborative support'
    },
    {
      title:'Synthesis and Characterisation',
      fund: 'ABC Inc.',
      investigator: 'Dr.Anonymous',
      designation: 'Professor',
      dept: 'Computer Science and Engineering',
      budget: 'Amount : Rs.xxxx Lakhs with collaborative support'
    }
  ]
}
