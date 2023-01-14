import { Injectable } from '@angular/core';
import { EventType } from '../models/event-type.model';

import { Event } from '../models/event.model';

@Injectable({ providedIn: 'root' })
export class EventService {
  events: Event[] = [
    {
      name: 'Campionatul de fotbal',
      image: '',
      date: Date.now(),
      type: EventType.Football,
      user: {
        name: 'George',
        email: 'george@gmail.com',
        password: 'george',
      },
      location: 'Cluj-Napoca',
      comments: 20,
      likes: 30,
      totalSeats: 100,
      occupiedSeats: 50,
      latitude: '',
      longitude: '',
    },
      {
        name: 'Campionatul de fotbal',
        image: '',
        date: Date.now(),
        type: EventType.Football,
        user: {
          name: 'ANDREI',
          email: 'george@gmail.com',
          password: 'george',
        },
        location: 'Cluj-Napoca',
        comments: 20,
        likes: 30,
        totalSeats: 100,
        occupiedSeats: 50,
        latitude: '',
        longitude: '',
      },
  ];

  selectedCategory!: EventType;

  getEvents(): Event[] {
    return this.events;
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
