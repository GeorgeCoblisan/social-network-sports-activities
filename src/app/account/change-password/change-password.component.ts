import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  password!: string;

  repeatPassword!: string;

  constructor(
    private accountService: AccountService,
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {}

  async resetPassword(): Promise<void> {
    if (this.password && this.repeatPassword) {
      if (this.password === this.repeatPassword) {
        this.accountService.changePassword(this.password);
        this.router.navigate(['/account/login']);
      } else {
        const toast = await this.toastController.create({
          message: 'Passwords do not match!',
          duration: 1500,
          position: 'bottom',
          color: 'danger',
        });

        await toast.present();
      }
    } else {
      const toast = await this.toastController.create({
        message: 'Please type the password!',
        duration: 1500,
        position: 'bottom',
        color: 'danger',
      });

      await toast.present();
    }
  }
}
