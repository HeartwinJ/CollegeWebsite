import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fp-eng',
  templateUrl: './fp-eng.component.html',
  styleUrls: ['./fp-eng.component.scss']
})
export class FpEngComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  project=[
    {
      title:'Synthesis and Characterisation',
      fund: 'ABC Inc.',
      investigator: 'Dr.Anonymous',
      designation: 'Professor',
      dept: 'English',
      budget: 'Amount : Rs.xxxx Lakhs with collaborative support'
    },
    {
      title:'Synthesis and Characterisation',
      fund: 'ABC Inc.',
      investigator: 'Dr.Anonymous',
      designation: 'Professor',
      dept: 'English',
      budget: 'Amount : Rs.xxxx Lakhs with collaborative support'
    }
  ]
}
