import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-forms-download',
  templateUrl: './forms-download.component.html',
  styleUrls: ['./forms-download.component.scss']
})
export class FormsDownloadComponent implements OnInit {

  faculty = [
    
  ];

  students = [
    
  ];
  
  general = [
    
  ];
  
  other = [
    
  ];
  
  stores = [
    
  ];
  
  academics = [

  ];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getForms().subscribe(data => this.faculty = data.faculty);
    this.mainService.getForms().subscribe(data => this.students = data.students);
    this.mainService.getForms().subscribe(data => this.general = data.general);
    this.mainService.getForms().subscribe(data => this.other = data.other);
    this.mainService.getForms().subscribe(data => this.stores = data.stores);
    this.mainService.getForms().subscribe(data => this.academics = data.academics);
  }

}
