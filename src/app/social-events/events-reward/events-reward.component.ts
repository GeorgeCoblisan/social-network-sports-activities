import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AccountService } from 'src/app/account/services/account.service';
import { EventService } from '../services/event.service';
import { Event } from '../models/event.model';
import { User } from 'src/app/account/models/user.model';

@Component({
  selector: 'app-events-reward',
  templateUrl: './events-reward.component.html',
  styleUrls: ['./events-reward.component.scss'],
})
export class EventsRewardComponent implements OnInit {
  event!: Event;

  user!: User;

  xp!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      let id = params['id'];
      this.xp = Math.floor(Math.random() * 500);
      this.event = this.eventService.findById(id as number);
      this.user = this.accountService.getUser();
      this.event.occupiedSeats += 1;
      this.event.user.push(this.user);
      this.user.events?.push(this.event);
      this.user.xp! += this.xp;
    });
  }
}
