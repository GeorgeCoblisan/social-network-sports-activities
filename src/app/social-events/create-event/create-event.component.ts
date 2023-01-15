import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

import { EventType } from '../models/event-type.model';
import { Event } from '../models/event.model';
import { EventService } from '../services/event.service';
import { Location } from '../models/location';
import { LocationService } from '../services/location.service';
import { AccountService } from 'src/app/account/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {
  readonly EventType = EventType;

  eventFormGroup: any;
  locations: Location[] = [];
  eventDate: Date = new Date();

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly eventService: EventService,
    private readonly locationService: LocationService,
    private toastController: ToastController,
    private accountService: AccountService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.initFormBuilder();
    this.locations = this.locationService.getAll();
  }

  private initFormBuilder() {
    this.eventFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      participants: ['', Validators.required],
      date: [''],
      location: ['', Validators.required],
    });
  }

  async create() {
    if (this.eventFormGroup.valid) {
      const event: Event = {
        id: Math.random(),
        name: this.eventFormGroup.get('name').value,
        image: 'string',
        date: this.eventDate as unknown as number,
        type: this.eventFormGroup.get('type').value,
        user: [this.accountService.getUser(),],
        location: this.eventFormGroup.get('location').value,
        comments: 0,
        likes: 0,
        totalSeats: this.eventFormGroup.get('participants').value,
        occupiedSeats: 0,
      };
      this.eventService.save(event);
      this.router.navigate(['/events/select-category']);
      console.log(this.eventService.getAll());
    } else {
      const toast = await this.toastController.create({
        message: 'Invalid form!',
        duration: 1500,
        position: 'bottom',
        color: 'danger',
      });

      await toast.present();
    }
  }
}
