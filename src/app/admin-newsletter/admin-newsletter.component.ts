import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-newsletter',
  templateUrl: './admin-newsletter.component.html',
  styleUrls: ['./admin-newsletter.component.scss']
})
export class AdminNewsletterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newsletter=[
    {
      title:'Volume No.2, Issue No.2, January 2019 ',
      url:''
    },
    {
      title:'Volume No.2, Issue No.1, August 2018 ',
      url:''
    },{
      title:'Volume No.1, Issue No.1, July 2017 ',
      url:''
    }
  ];
}
