import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INews } from './_interfaces/news';
import { IEvents } from './_interfaces/events';
import { ITenders } from './_interfaces/tenders';
import { IFooter } from './_interfaces/footer';
import { IForms } from './_interfaces/forms';
import { IJsonMessage } from './_interfaces/jsonMessage';
import { IFacDetails } from './_interfaces/facDetails';
import { IJsonFacDetails } from './_interfaces/jsonFacDetails';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private newsUrl: string = '/assets/data/news.json';
  private eventsUrl: string = '/assets/data/events.json';
  private tendersUrl: string = '/assets/data/tenders.json';
  private footerUrl: string = '/assets/data/footer.json';
  private formsUrl: string = '/assets/data/forms.json';

  constructor(private http: HttpClient, private sessionStorage: SessionStorageService) { }

  getNews(): Observable<INews[]> {
    return this.http.get<INews[]>(this.newsUrl);
  }

  getEvents(): Observable<IEvents[]> {
    return this.http.get<IEvents[]>(this.eventsUrl);
  }

  getTenders(): Observable<ITenders[]> {
    return this.http.get<ITenders[]>(this.tendersUrl);
  }
  
  getFooter(): Observable<IFooter> {
    return this.http.get<IFooter>(this.footerUrl);
  }

  getForms(): Observable<IForms> {
    return this.http.get<IForms>(this.formsUrl);
  }

  loginFac(username: string, password: string): Observable<IJsonMessage> {
    return this.http.post<IJsonMessage>('http://192.168.56.102/CollegeWebsite/api/facLogin.php', {username, password} );
  }
  
  getFac(): Observable<IJsonFacDetails> {
    let id = this.sessionStorage.retrieve('loggedInUser');
    return this.http.post<IJsonFacDetails>('http://192.168.56.102/CollegeWebsite/api/getFaculty.php', {id});
  }

  /*setFac(fac: any) {
    this.faculty.forEach(function (index) {
      if (index.id == fac.id) {
        index = fac;
        console.log('Index is ::');
        console.log(index);
      }
    });
  }*/
}
