import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navClass: string = ' ';
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    if (this.navClass == ' ') {
      this.navClass = 'Show';
    }
    else {
      this.navClass = ' ';
    }
  }
}
