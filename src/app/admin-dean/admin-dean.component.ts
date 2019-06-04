import { Component, OnInit } from '@angular/core';
import { ResearchAboutComponent } from '../research-about/research-about.component';

@Component({
  selector: 'app-admin-dean',
  templateUrl: './admin-dean.component.html',
  styleUrls: ['./admin-dean.component.scss']
})
export class AdminDeanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  dean=[
    {
      pic:'assets/images/img_avatar.png',
      name:'Anonymous',
      field:'Research',
      mail:'mail@mail.com',
      phone:'123456789'
    }, 
    {
      pic:'assets/images/img_avatar.png',
      name:'Anonymous',
      field:'Consultancy',
      mail:'mail@mail.com',
      phone:'123456789'
    },
    {
      pic:'assets/images/img_avatar.png',
      name:'Anonymous',
      field:'Academic (UG)',
      mail:'mail@mail.com',
      phone:'123456789'
    },
    {
      pic:'assets/images/img_avatar.png',
      name:'Anonymous',
      field:'Academic (PG)',
      mail:'mail@mail.com',
      phone:'123456789'
    },
    {
      pic:'assets/images/img_avatar.png',
      name:'Anonymous',
      field:'Faculty Welfare',
      mail:'mail@mail.com',
      phone:'123456789'
    },
    {
      pic:'assets/images/img_avatar.png',
      name:'Anonymous',
      field:'Staff Welfare',
      mail:'mail@mail.com',
      phone:'123456789'
    },
    {
      pic:'assets/images/img_avatar.png',
      name:'Anonymous',
      field:'Student Welfare (Boys)',
      mail:'mail@mail.com',
      phone:'123456789'
    },
    {
      pic:'assets/images/img_avatar.png',
      name:'Anonymous',
      field:'Student Welfare (Girls)',
      mail:'mail@mail.com',
      phone:'123456789'
    },
    {
      pic:'assets/images/img_avatar.png',
      name:'Anonymous',
      field:'Planning',
      mail:'mail@mail.com',
      phone:'123456789'
    },
    {
      pic:'assets/images/img_avatar.png',
      name:'Anonymous',
      field:'Devlopment',
      mail:'mail@mail.com',
      phone:'123456789'
    },
    

  ]
}
