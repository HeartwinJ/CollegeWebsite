import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-humanities-fac-and-staff',
  templateUrl: './humanities-fac-and-staff.component.html',
  styleUrls: ['./humanities-fac-and-staff.component.scss']
})
export class HumanitiesFacAndStaffComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hod = [
    {
      pic: 'assets/images/blank-profile-pic.jpg',
      name: 'Dr.X',
      qualification: {
        bach: 'B.Sc.- IIT Madras',
        mast: 'M.Sc.- IIT Madras',
        pg: 'Ph.D.- IIT Madras'
      },
      interests: 'something, something else, another thing, etc, not etc, etc etc',
      publications: '9',
      projects: '9',
      email: 'xyz@x.com'
    }
  ];
  
  prof = [
  ];
  
  assocProf = [
  ];

  assistProf = [
    {
      pic: 'assets/images/blank-profile-pic.jpg',
      name: 'Dr.X',
      qualification: {
        bach: 'B.Sc.- IIT Madras',
        mast: 'M.Sc.- IIT Madras',
        pg: 'Ph.D.- IIT Madras'
      },
      interests: 'something, something else, another thing, etc, not etc, etc etc',
      publications: '9',
      projects: '9',
      email: 'xyz@x.com'
    },
  ];

  inspireFac = [
    {
      pic: 'assets/images/blank-profile-pic.jpg',
      name: 'Dr.X',
      qualification: {
        bach: 'B.Sc.- IIT Madras',
        mast: 'M.Sc.- IIT Madras',
        pg: 'Ph.D.- IIT Madras'
      },
      interests: 'something, something else, another thing, etc, not etc, etc etc',
      publications: '9',
      projects: '9',
      email: 'xyz@x.com'
    },
  ];

  labAssist = [
  ];
}
