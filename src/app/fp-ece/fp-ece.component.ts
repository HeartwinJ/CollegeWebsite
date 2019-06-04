import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fp-ece',
  templateUrl: './fp-ece.component.html',
  styleUrls: ['./fp-ece.component.scss']
})
export class FpEceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  project=[
    {
      title:'Synthesis and Characterisation',
      fund: 'ABC Inc.',
      investigator: 'Dr.Anonymous',
      designation: 'Professor',
      dept: 'Electronics and Communication Engineering',
      budget: 'Amount : Rs.xxxx Lakhs with collaborative support'
    },
    {
      title:'Synthesis and Characterisation',
      fund: 'ABC Inc.',
      investigator: 'Dr.Anonymous',
      designation: 'Professor',
      dept: 'Electronics and Communication Engineering',
      budget: 'Amount : Rs.xxxx Lakhs with collaborative support'
    }
  ]
}
