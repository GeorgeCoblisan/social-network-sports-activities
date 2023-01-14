import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;

  constructor(
    private accountService: AccountService,
    private toastController: ToastController,
    private router: Router,
  ) {}

  ngOnInit() {}

  async login(): Promise<void> {
    if (this.accountService.checkLogin(this.email, this.password)) {
      console.log('LOGIN');
      //TODO: redirect to select category page
      this.router.navigate(['/account/profile']);
    } else {
      const toast = await this.toastController.create({
        message: 'Invalid credentials!',
        duration: 1500,
        position: 'bottom',
        color: 'danger',
      });

      await toast.present();
    }
  }
}
