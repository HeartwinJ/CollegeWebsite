import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fp-phy',
  templateUrl: './fp-phy.component.html',
  styleUrls: ['./fp-phy.component.scss']
})
export class FpPhyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  project=[
    {
      title:'Synthesis and Characterisation',
      fund: 'ABC Inc.',
      investigator: 'Dr.Anonymous',
      designation: 'Professor',
      dept: 'Physics',
      budget: 'Amount : Rs.xxxx Lakhs with collaborative support'
    },
    {
      title:'Synthesis and Characterisation',
      fund: 'ABC Inc.',
      investigator: 'Dr.Anonymous',
      designation: 'Professor',
      dept: 'Physics',
      budget: 'Amount : Rs.xxxx Lakhs with collaborative support'
    }
  ]
}
