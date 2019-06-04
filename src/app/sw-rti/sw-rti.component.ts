import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sw-rti',
  templateUrl: './sw-rti.component.html',
  styleUrls: ['./sw-rti.component.scss']
})
export class SwRtiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  file=[
    {
      url:'',
      filename:'RTI Act',
    },
    {
      url:'',
      filename:'Application Form',
    },
    {
      url:'',
      filename:'Procedure',
    }
  ]
}
