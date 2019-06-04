import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-consultancy-projects',
  templateUrl: './research-consultancy-projects.component.html',
  styleUrls: ['./research-consultancy-projects.component.scss']
})
export class ResearchConsultancyProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  project=[
    {
      no:'1',
      title:'Work ',
      fund:'ABC Inc',
      investigator: 'Dr.Anonymous',
      year: '2000',
      budget:'Rs.XXXXX Lakhs'
    },
    {
      no:'1',
      title:'Work ',
      fund:'ABC Inc',
      investigator: 'Dr.Anonymous',
      year: '2000',
      budget:'Rs.XXXXX Lakhs'
    },
    {
      no:'1',
      title:'Work ',
      fund:'ABC Inc',
      investigator: 'Dr.Anonymous',
      year: '2000',
      budget:'Rs.XXXXX Lakhs'
    },
    {
      no:'1',
      title:'Work ',
      fund:'ABC Inc',
      investigator: 'Dr.Anonymous',
      year: '2000',
      budget:'Rs.XXXXX Lakhs'
    },
    {
      no:'1',
      title:'Work ',
      fund:'ABC Inc',
      investigator: 'Dr.Anonymous',
      year: '2000',
      budget:'Rs.XXXXX Lakhs'
    }
  ]
}
