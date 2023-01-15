import { Component, OnInit } from '@angular/core';

import { User } from '../models/user.model';
import { AccountService } from '../services/account.service';
import { Event } from '../../social-events/models/event.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user!: User;

  events!: Event[];

  eventsToGo: number = 0;

  eventsParticipated: number = 0;

  eventsSelected : boolean = false;

  constructor(
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    const userLogged = this.accountService.getUser();
    if (userLogged) {
      this.user = userLogged;
      this.events = this.user.events!;
      this.events.forEach((event) => {
        if (event.date > Date.now().valueOf()) {
          this.eventsToGo += 1;
        }
        else {
          this.eventsParticipated += 1;
        }
      })
    }
  }

  seeToGoEvents(): void {
    this.eventsSelected = true;
    this.updateEvents();
    this.events = this.events.filter((event) => event.date > Date.now().valueOf());
  }

  seeParticipatedEvents(): void {
    this.eventsSelected = true;
    this.updateEvents();
    this.events = this.events.filter((event) => event.date < Date.now().valueOf());
  }

  updateEvents(): void {
    this.events = this.user.events!;
    this.eventsParticipated = 0;
    this.eventsToGo = 0;
    this.events.forEach((event) => {
      if (event.date > Date.now().valueOf()) {
        this.eventsToGo += 1;
      }
      else {
        this.eventsParticipated += 1;
      }
    })
  }
}
