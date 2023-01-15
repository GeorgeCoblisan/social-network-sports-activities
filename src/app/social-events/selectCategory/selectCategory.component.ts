import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { EventType } from '../models/event-type.model';

import { EventService } from '../services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: 'selectCategory.component.html',
  styleUrls: ['selectCategory.component.scss'],
})
export class SelectCategory {
  category!: string;

  constructor(
    private eventService: EventService,
    private router: Router,
    private toastController: ToastController,
  ) {}

  selectCategory(category: string): void {
    this.category = category;
    this.eventService.selectCategory(category);
  }

  async navigateToFeed(): Promise<void> {
    if (this.category) {
      const type: EventType = Object.values(EventType).find(val => val === this.category)!;
      if (this.eventService.getAll().filter((event) => event.type === type).length > 0) {
        this.router.navigate(['/events/feed']);
      }
      else {
        const toast = await this.toastController.create({
          message: 'We do not have events for this category at the moment!',
          duration: 1500,
          position: 'bottom',
          color: 'danger',
        });
  
        await toast.present();
      }
    }
    else {
      const toast = await this.toastController.create({
        message: 'Please select a category!',
        duration: 1500,
        position: 'bottom',
        color: 'danger',
      });

      await toast.present();
    }
  }

  navigateToMap(): void {
    this.router.navigate(['/events/map']);
  }
}
