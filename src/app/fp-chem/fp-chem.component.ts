import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fp-chem',
  templateUrl: './fp-chem.component.html',
  styleUrls: ['./fp-chem.component.scss']
})
export class FpChemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  project=[
    {
      title:'Synthesis and Characterisation',
      fund: 'ABC Inc.',
      investigator: 'Dr.Anonymous',
      designation: 'Professor',
      dept: 'Chemistry',
      budget: 'Amount : Rs.xxxx Lakhs with collaborative support'
    },
    {
      title:'Synthesis and Characterisation',
      fund: 'ABC Inc.',
      investigator: 'Dr.Anonymous',
      designation: 'Professor',
      dept: 'Chemistry',
      budget: 'Amount : Rs.xxxx Lakhs with collaborative support'
    }
  ]
}
