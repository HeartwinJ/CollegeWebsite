import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fp-mech',
  templateUrl: './fp-mech.component.html',
  styleUrls: ['./fp-mech.component.scss']
})
export class FpMechComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  project=[
    {
      title:'Synthesis and Characterisation',
      fund: 'ABC Inc.',
      investigator: 'Dr.Anonymous',
      designation: 'Professor',
      dept: 'Mechanical Engineering',
      budget: 'Amount : Rs.xxxx Lakhs with collaborative support'
    },
    {
      title:'Synthesis and Characterisation',
      fund: 'ABC Inc.',
      investigator: 'Dr.Anonymous',
      designation: 'Professor',
      dept: 'Mechanical Engineering',
      budget: 'Amount : Rs.xxxx Lakhs with collaborative support'
    }
  ]
}
