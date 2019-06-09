import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { IJsonFacDetails } from '../_interfaces/jsonFacDetails';

@Component({
  selector: 'app-fac-portal-view',
  templateUrl: './fac-portal-view.component.html',
  styleUrls: ['./fac-portal-view.component.scss']
})
export class FacPortalViewComponent implements OnInit {

  faculty: IJsonFacDetails = {
    result: {
      id: '',
      profilePicture: '',
      name: '',
      designation: '',
      scholarsGuided: '',
      educationalQualification: '',
      proffesionalExperience:'',
      journalPapers: '',
      confPapers: '',
      researchProj: '',
      consultProj: '',
      patentsGranted: '',
      adminResponsibilities: '',
      workOrganised: '',
      programsConducted: '',
      labEstablished: '',
      booksPublished: '',
      outreachActivities: '',
      proffesionalMembership: '',
      googleScholarLink: '',
      profilePageLink: ''
    },
    success: '',
    message: ''
  };

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getFac().subscribe(data => {
      this.faculty.result = data.result;
      this.faculty.success = data.success;
      this.faculty.message = data.message;
    });
  }

}
