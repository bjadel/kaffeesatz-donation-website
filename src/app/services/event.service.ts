import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from './events';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  //eventUrl = "https://www.kaffeesatz-chemnitz.de/events.php";
  //eventUrl = "https://preview.kaffeesatz-chemnitz.de/events.php";
  eventUrl = "http://localhost:4200/assets/events.php";

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get<Events>(this.eventUrl);
  }
}
