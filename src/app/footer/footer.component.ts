import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

/*Edit the Social Media Links in the Footer here*/
  social = {
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    youtube: "https://youtube.com/",
    linkedin: "https://linkedin.com/"
  }

  /*Edit the Contact Details in the Footer here*/
  contact = {
    email: "123@nitpy.ac.in",
    website: "nitpy.ac.in",
    phone: "1234567890",
    fax: "1234567890"
  }
}
