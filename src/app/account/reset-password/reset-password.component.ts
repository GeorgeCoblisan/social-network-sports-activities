import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  email!: string;

  constructor(
    private accountService: AccountService,
    private toastController: ToastController,
    private router: Router,
  ) {}

  ngOnInit() {}

  async checkEmail(): Promise<void> {
    if (this.email) {
      if (this.accountService.checkIfEmailExists(this.email)) {
        this.router.navigate(['/account/change-password']);
      } else {
        const toast = await this.toastController.create({
          message: 'This email does not exist!',
          duration: 1500,
          position: 'bottom',
          color: 'danger',
        });

        await toast.present();
      }
    } else {
      const toast = await this.toastController.create({
        message: 'Please type an email!',
        duration: 1500,
        position: 'bottom',
        color: 'danger',
      });

      await toast.present();
    }
  }
}
