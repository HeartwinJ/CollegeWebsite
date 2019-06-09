import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  news = [

  ];

  events = [
    
  ];

  tenders = [
    
  ];

  slides = [
    {
      "image": "assets/images/slides/img001.jpg"
    }, {
      "image": "assets/images/slides/img002.jpg"
    }, {
      "image": "assets/images/slides/img003.jpg"
    }, {
      "image": "assets/images/slides/img004.jpg"
    }, {
      "image": "assets/images/slides/img005.jpg"
    }, {
      "image": "assets/images/slides/img006.jpg"
    }, {
      "image": "assets/images/slides/img007.jpg"
    }, {
      "image": "assets/images/slides/img008.jpg"
    }, {
      "image": "assets/images/slides/img009.jpg"
    }, {
      "image": "assets/images/slides/img010.jpg"
    }, {
      "image": "assets/images/slides/img011.jpg"
    }, {
      "image": "assets/images/slides/img012.jpg"
    }
  ];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getNews().subscribe(data => this.news = data);
    this.mainService.getEvents().subscribe(data => this.events = data);
    this.mainService.getTenders().subscribe(data => this.tenders = data);
  }

  carouselOptions = {
    startPosition: 0,
    margin: 10,
    autoWidth: true,
    items: 1,
    center: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: false,
    lazyLoad: true
  };
  
}
