import { Component, OnInit } from '@angular/core';

import { MainService } from '../main.service';
import { IFacDetails } from '../_interfaces/FacDetails';

@Component({
  selector: 'app-fac-portal-edit',
  templateUrl: './fac-portal-edit.component.html',
  styleUrls: ['./fac-portal-edit.component.scss']
})
export class FacPortalEditComponent implements OnInit {

  editorConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike', { 'align': [] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
    ]
  }

  editorStyles = {
    backgroundColor: '#ffffff',
    height: '15rem',
  }

  faculty: IFacDetails = {
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
  };

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getFac().subscribe(data => {
      this.faculty = data.result;
      console.log(data.message);
    });
  }

  updateFacDetails() {
    this.mainService.setFac(this.faculty).subscribe(data => console.log(data.message));
  }

}
