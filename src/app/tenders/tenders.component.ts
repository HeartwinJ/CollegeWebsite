import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.scss']
})
export class TendersComponent implements OnInit {

  tenders = [

  ];
  
  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getTenders().subscribe(data => this.tenders = data);
  }

}
