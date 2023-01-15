import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { EventType } from '../models/event-type.model';

import { EventService } from '../services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: 'discover.component.html',
  styleUrls: ['discover.component.scss'],
})
export class Discover {
  category!: string;

  constructor(
    private eventService: EventService,
    private router: Router,
    private toastController: ToastController
  ) {}

  selectCategory(category: string): void {
    this.category = category;
    this.eventService.selectCategory(category);
    const type: EventType = Object.values(EventType).find(val => val === this.category)!;
    if (this.eventService.getAll().filter((event) => event.type === type).length > 0) {
      this.router.navigate(['/events/feed']);
    }
    else {
      this.showErrorToast();
    }
  }

  async showErrorToast(): Promise<void> {
    const toast = await this.toastController.create({
      message: 'We do not have events for this category at the moment!',
      duration: 1500,
      position: 'bottom',
      color: 'danger',
    });

    await toast.present();
  }
}
