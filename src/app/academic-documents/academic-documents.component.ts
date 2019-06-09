import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-academic-documents',
  templateUrl: './academic-documents.component.html',
  styleUrls: ['./academic-documents.component.scss']
})
export class AcademicDocumentsComponent implements OnInit {

  academics = [

  ];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getForms().subscribe(data => this.academics = data.academics);
  }

}
