import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EventService} from "../services/event.service";
import {Event} from "../models/event.model";
import { EventType } from '../models/event-type.model';

@Component({
  selector: 'app-events-join',
  templateUrl: './events-join.component.html',
  styleUrls: ['./events-join.component.scss'],
})
export class EventsJoinComponent implements OnInit {

  readonly EventType = EventType;

  event!: Event;

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly eventService: EventService,
              private router: Router,
              ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let id = params['id'];
      this.event = this.eventService.findById(id as number);
    });
  }

  joinEvent(event: Event): void {
    this.router.navigate(['/events/reward'], { queryParams: { id: event.id } });
  }
}
