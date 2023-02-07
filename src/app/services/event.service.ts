import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from './events';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventUrl = environment.eventhost + "/events.php";

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get<Events>(this.eventUrl);
  }
}
