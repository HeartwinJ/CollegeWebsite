import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  carouselOptions = {
    items: 1,
    margin: 0,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: false,
    dots: false,
    animateIn: 'flipInX',
    animateOut: 'slideOutDown',
  };

  sampleSlides = [
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
    }, {
      image: "assets/images/slides/img006.jpg"
    }, {
      image: "assets/images/slides/img007.jpg"
    }, {
      image: "assets/images/slides/img008.jpg"
    }, {
      image: "assets/images/slides/img009.jpg"
    }, {
      image: "assets/images/slides/img010.jpg"
    }, {
      image: "assets/images/slides/img011.jpg"
    }, {
      image: "assets/images/slides/img012.jpg"
    }
  ];

  list = [
    {
      year: '2017',
      events: [
        {
          eventTitle: 'Test Event 1',
          pics: [
            'assets/images/slides/img001.jpg',
            'assets/images/slides/img002.jpg',
            'assets/images/slides/img003.jpg',
            'assets/images/slides/img004.jpg',
            'assets/images/slides/img005.jpg'
          ]
        },{
          eventTitle: 'Test Event 2',
          pics: [
            'assets/images/slides/img001.jpg',
            'assets/images/slides/img002.jpg',
            'assets/images/slides/img003.jpg',
            'assets/images/slides/img004.jpg',
            'assets/images/slides/img005.jpg'
          ]
        },
      ]
    },{
      year: '2018',
      events: [
        {
          eventTitle: 'Test Event 1',
          pics: [
            'assets/images/slides/img001.jpg',
            'assets/images/slides/img002.jpg',
            'assets/images/slides/img003.jpg',
            'assets/images/slides/img004.jpg',
            'assets/images/slides/img005.jpg'
          ]
        },{
          eventTitle: 'Test Event 2',
          pics: [
            'assets/images/slides/img001.jpg',
            'assets/images/slides/img002.jpg',
            'assets/images/slides/img003.jpg',
            'assets/images/slides/img004.jpg',
            'assets/images/slides/img005.jpg'
          ]
        },
      ]
    },{
      year: '2019',
      events: [
        {
          eventTitle: 'Test Event 1',
          pics: [
            'assets/images/slides/img001.jpg',
            'assets/images/slides/img002.jpg',
            'assets/images/slides/img003.jpg',
            'assets/images/slides/img004.jpg',
            'assets/images/slides/img005.jpg'
          ]
        },{
          eventTitle: 'Test Event 2',
          pics: [
            'assets/images/slides/img001.jpg',
            'assets/images/slides/img002.jpg',
            'assets/images/slides/img003.jpg',
            'assets/images/slides/img004.jpg',
            'assets/images/slides/img005.jpg'
          ]
        },
      ]
    },
  ];
  
}
