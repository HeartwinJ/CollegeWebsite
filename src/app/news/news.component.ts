import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news = [

  ];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getNews().subscribe(data => this.news = data);
  }

}
