import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  carouselOptions = {
    items: 1,
    margin: 0,
    //loop: true,
    rewind: true,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: false,
  };

  /*Slideshow Slides*/
  slides = [
      {
      image: "assets/images/slides/img001.jpg"
    }, {
      image: "assets/images/slides/img002.jpg"
    }, {
      image: "assets/images/slides/img003.jpg"
    }, {
      image: "assets/images/slides/img004.jpg"
    }, {
      image: "assets/images/slides/img005.jpg"
    }
  ];
  
  news = [
    {
      content: "News is Working!",
      url: "#"
    }, {
      content: "News is still Working!",
      url: "#"
    },{
      content: "News is Still Still  Still Still Still Still Still Still Still Still Still Still Still Still Still Still Still Still Still Still Still Still Still Still Still Still Still Still Still Still Still Still Working!",
      url: "#"
    },{
      content: "Everything is  Still Working!",
      url: "#"
    },{
      content: "Everything is  Still Working!",
      url: "#"
    },{
      content: "Everything is  Still Working!",
      url: "#"
    },{
      content: "Everything is  Still Working!",
      url: "#"
    },{
      content: "Everything is  Still Working!",
      url: "#"
    },{
      content: "Everything is  Still Working!",
      url: "#"
    },{
      content: "Everything is  Still Working!",
      url: "#"
    },{
      content: "Everything is  Still Working!",
      url: "#"
    },{
      content: "Everything is  Still Working!",
      url: "#"
    },{
      content: "Everything is  Still Working!",
      url: "#"
    },{
      content: "Everything is  Still Working!",
      url: "#"
    },{
      content: "Everything is  Still Working!",
      url: "#"
    },
  ];

  events = [
    {
      date: "17 May 2019",
      content: "Events is Working!",
      url: "#"
    },{
      date: "18 May 2019",
      content: "Events is Still Working!",
      url: "#"
    },  
  ];

  tenders = [
    {
      content: "Tenders is Working!",
      url: "#",
      deadline: "17 June 2019"
    },{
      content: "Tenders is Still Working!",
      url: "#",
      deadline: "18 June 2019"
    },  
  ];
}
