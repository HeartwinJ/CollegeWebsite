import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tnp-internship',
  templateUrl: './tnp-internship.component.html',
  styleUrls: ['./tnp-internship.component.scss']
})
export class TnpInternshipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  internship=[
    {
      area:'Nanotechnology',
      dept:'Engineering',
      duration:'15 days  (01-01-2019  -  15-01-2019)',
      no:'5'
    },
    {
      area:'Nanotechnology',
      dept:'Engineering',
      duration:'15 days  (01-01-2019  -  15-01-2019)',
      no:'5'
    },
    {
      area:'Nanotechnology',
      dept:'Engineering',
      duration:'15 days  (01-01-2019  -  15-01-2019)',
      no:'5'
    },
    {
      area:'Nanotechnology',
      dept:'Engineering',
      duration:'15 days  (01-01-2019  -  15-01-2019)',
      no:'5'
    }
  ];
}
