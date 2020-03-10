import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { IJsonMessage } from '../_interfaces/jsonMessage';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-fac-login',
  templateUrl: './fac-login.component.html',
  styleUrls: ['./fac-login.component.scss']
})
  
export class FacLoginComponent implements OnInit {

  username: string;
  password: string;

  message: IJsonMessage = { success: '', message: '', id: '' };

  constructor(private router: Router, private mainService: MainService, private sessionStorage: SessionStorageService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.mainService.loginFac(this.username, this.password).subscribe(message => this.message = message);
    if (this.message.success == 'true') {
      this.sessionStorage.store('loggedInUser',this.message.id)
      this.router.navigate(['facPortal']);
      console.log(this.message.message);
    }
    else {
      console.log(this.message.message);
    }
  }

}
