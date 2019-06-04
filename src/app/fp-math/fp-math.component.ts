import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fp-math',
  templateUrl: './fp-math.component.html',
  styleUrls: ['./fp-math.component.scss']
})
export class FpMathComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  project=[
    {
      title:'Synthesis and Characterisation',
      fund: 'ABC Inc.',
      investigator: 'Dr.Anonymous',
      designation: 'Professor',
      dept: 'Mathematics',
      budget: 'Amount : Rs.xxxx Lakhs with collaborative support'
    },
    {
      title:'Synthesis and Characterisation',
      fund: 'ABC Inc.',
      investigator: 'Dr.Anonymous',
      designation: 'Professor',
      dept: 'Mathematics',
      budget: 'Amount : Rs.xxxx Lakhs with collaborative support'
    }
  ]
}
