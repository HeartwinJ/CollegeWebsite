import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tnp-procedure',
  templateUrl: './tnp-procedure.component.html',
  styleUrls: ['./tnp-procedure.component.scss']
})
export class TnpProcedureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  file=[
    {
      url:'',
      filename:'Job Application Form',
    },
  ]
}
