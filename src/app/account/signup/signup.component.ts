import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  name!: string;

  email!: string;

  password!: string;

  repeatPassword!: string;

  constructor(
    private accountService: AccountService,
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {}

  async signIn(): Promise<void> {
    if (this.name && this.email && this.password && this.repeatPassword) {
      if (this.password !== this.repeatPassword) {
        const toast = await this.toastController.create({
          message: 'Passwords do not match!',
          duration: 1500,
          position: 'bottom',
          color: 'danger',
        });

        await toast.present();
      } else {
        const user = {
          name: this.name,
          email: this.email,
          password: this.password,
          xp: 0,
          level: 1,
        };
        if (this.accountService.signUp(user)) {
          this.router.navigate(['/account/login']);
        } else {
          const toast = await this.toastController.create({
            message: 'This user already exists!',
            duration: 1500,
            position: 'bottom',
            color: 'danger',
          });

          await toast.present();
        }
      }
    } else {
      const toast = await this.toastController.create({
        message: 'Please complete all fields!',
        duration: 1500,
        position: 'bottom',
        color: 'danger',
      });

      await toast.present();
    }
  }
}
