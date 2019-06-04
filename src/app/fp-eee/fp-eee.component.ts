import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fp-eee',
  templateUrl: './fp-eee.component.html',
  styleUrls: ['./fp-eee.component.scss']
})
export class FpEeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  project=[
    {
      title:'Synthesis and Characterisation',
      fund: 'ABC Inc.',
      investigator: 'Dr.Anonymous',
      designation: 'Professor',
      dept: 'Electrical and Electronics Engineering',
      budget: 'Amount : Rs.xxxx Lakhs with collaborative support'
    },
    {
      title:'Synthesis and Characterisation',
      fund: 'ABC Inc.',
      investigator: 'Dr.Anonymous',
      designation: 'Professor',
      dept: 'Electrical and Electronics Engineering',
      budget: 'Amount : Rs.xxxx Lakhs with collaborative support'
    }
  ]
}
