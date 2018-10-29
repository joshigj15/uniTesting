import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventDetailsModel } from '../EventDetailsModel';
// import {eventListApi,eventDetailsApi} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EventDataService {
  public eventListApi:string="http://192.168.1.40:8084/api/vendor/getVendorList";
  public eventDetailsApi:string ="http://192.168.1.40:8084/api/event/eventtickets/";
  constructor(public http: HttpClient) { }

  
  getEventList(myObj:any) {
    return this.http.post(this.eventListApi,myObj,httpOptions);
  }

  getEventDetails(eventId:any): Observable<EventDetailsModel> {
    const url = `${this.eventDetailsApi}/${eventId}`;
    return this.http.get<EventDetailsModel>(url,httpOptions);
  }
}
