import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eee-syllabus',
  templateUrl: './eee-syllabus.component.html',
  styleUrls: ['./eee-syllabus.component.scss']
})
export class EeeSyllabusComponent implements OnInit {

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
