import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cse-lab',
  templateUrl: './cse-lab.component.html',
  styleUrls: ['./cse-lab.component.scss']
})
export class CseLabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  images=[
    {
      pic:'assets/images/dept/cse-lab/1_img.jpg',
      title:''
    },
    {
      pic:'assets/images/dept/cse-lab/2_img.jpg',
      title:''
    }
  ]
}
