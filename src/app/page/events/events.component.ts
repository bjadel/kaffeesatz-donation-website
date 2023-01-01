import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Events } from '../../services/events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events:Events;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents()
        .subscribe((data: Events) => this.events = {
            events: data.events
        });
  }

}
