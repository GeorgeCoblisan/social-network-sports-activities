import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

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
      this.router.navigate(['/events/feed']);
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
}
