import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  social = {
    facebook: '',
    twitter: '',
    youtube: '',
    linkedin: ''
  };
  
  contact = {
    email: '',
    website: '',
    phone: '',
    fax: ''
  };
  
  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getFooter().subscribe(data => this.social = data.social);
    this.mainService.getFooter().subscribe(data => this.contact = data.contact);
  }

}
