import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cse-syllabus',
  templateUrl: './cse-syllabus.component.html',
  styleUrls: ['./cse-syllabus.component.scss']
})
export class CseSyllabusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  file=[
    {
      url:'',
      filename:'B.Tech Curriculum & Syllabus',
    },
    {
      url:'',
      filename:'M.Tech Curriculum & Syllabus',
    },
    
  ]

}
