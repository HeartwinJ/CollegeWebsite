import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-humanities-syllabus',
  templateUrl: './humanities-syllabus.component.html',
  styleUrls: ['./humanities-syllabus.component.scss']
})
export class HumanitiesSyllabusComponent implements OnInit {

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
