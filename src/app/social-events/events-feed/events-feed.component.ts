import { Component, OnInit } from '@angular/core';
import { EventType } from '../models/event-type.model';

import { Event } from '../models/event.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-events-feed',
  templateUrl: './events-feed.component.html',
  styleUrls: ['./events-feed.component.scss'],
})
export class EventsFeedComponent implements OnInit {
  events: Event[] = [];

  category!: EventType;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.category = this.eventService.getCategory();
    this.events = this.eventService
      .getAll()
      .filter((event) => event.type === this.category);
    console.log(this.events);
  }
}
