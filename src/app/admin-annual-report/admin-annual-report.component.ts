import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-annual-report',
  templateUrl: './admin-annual-report.component.html',
  styleUrls: ['./admin-annual-report.component.scss']
})
export class AdminAnnualReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newsletter=[
    {
      title:'Annual Report & Audited Accounts 2010-2011 ',
      url:''
    },
    {
      title:'Annual Report & Audited Accounts 2011-2012',
      url:''
    },{
      title:'Annual Report & Audited Accounts 2012-2013',
      url:''
    },
    {
      title:'Annual Report & Audited Accounts 2013-2014 ',
      url:''
    },
    {
      title:'Annual Report & Audited Accounts 2014-2015 ',
      url:''
    },
    {
      title:'Annual Report & Audited Accounts 2015-2016 ',
      url:''
    },
    {
      title:'Annual Report & Audited Accounts 2016-2017 ',
      url:''
    },
  ];
}
