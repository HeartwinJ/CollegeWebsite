import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ece-syllabus',
  templateUrl: './ece-syllabus.component.html',
  styleUrls: ['./ece-syllabus.component.scss']
})
export class EceSyllabusComponent implements OnInit {

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
