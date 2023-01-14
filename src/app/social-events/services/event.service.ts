import { Injectable } from "@angular/core";
import {Event} from "../models/event.model";
import {EventType} from "../models/event-type.model";

@Injectable({ providedIn: 'root' })
export class EventService {

  events: Event[] = [
    {
      id: 1,
      name: 'Event 1',
      image: 'string',
      date: new Date(),
      type: EventType.Running,
      location: {
        address: 'BT Arena',
        latitude: 46.767052,
        longitude: 23.570519
      },
      comments: 0,
      likes: 5,
      totalSeats: 12,
      occupiedSeats: 5,
    },
    {
      id: 2,
      name: 'Event 2',
      image: 'string',
      date: new Date(),
      location: {
        address: 'Parcul sala sporturilor',
        latitude: 46.765468,
        longitude: 23.561321
      },
      type: EventType.Football,
      comments: 0,
      likes: 5,
      totalSeats: 12,
      occupiedSeats: 5,
    }
  ]

  save(event: Event): void {
    this.events.push(event);
  }

  getAll(): Event[] {
    return this.events;
  }

  findById(id: number): Event {
    return this.events.filter(it => it.id == id)[0];
  }
}
