import {Injectable} from "@angular/core";

import { EventType } from "../models/event-type.model";
import { Event } from '../models/event.model';

@Injectable({providedIn: 'root'})
export class EventService {

  events: Event[] = [
    {
      id: 1,
      name: 'Event 1',
      image: 'string',
      date: 1673697715000,
      type: EventType.Running,
      user: [{
        name: 'George',
        email: 'george@gmail.com',
        password: 'george',
      }],
      location: {
        address: 'BT Arena',
        latitude: 46.767052,
        longitude: 23.570519
      },
      comments: 0,
      likes: 5,
      totalSeats: 12,
      occupiedSeats: 12,
    },
    {
      id: 2,
      name: 'Event 2',
      image: 'string',
      date: 1674043315000,
      user: [{
        name: 'George',
        email: 'george@gmail.com',
        password: 'george',
      }],
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
  ];

  selectedCategory!: EventType;

  save(event: Event): void {
    this.events.push(event);
  }

  getAll(): Event[] {
    return this.events;
  }

  findById(id: number): Event {
    return this.events.filter(it => it.id == id)[0];
  }

  getCategory(): EventType {
    return this.selectedCategory;
  }

  selectCategory(category: string): void {
    if (category === 'Basketball') {
        this.selectedCategory = EventType.Basketball;
    }
    else if (category === 'Tennis') {
        this.selectedCategory = EventType.Tennis;
    }
    else if (category === 'Running') {
        this.selectedCategory = EventType.Running;
    }
    else if (category === 'Football') {
        this.selectedCategory = EventType.Football;
    }
  }
}
