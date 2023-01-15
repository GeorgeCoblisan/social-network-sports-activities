import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import {NavbarModule} from "../navbar/navbar.module";
import { SocialEventsModule } from '../social-events/social-events.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AccountRoutingModule, NavbarModule, SocialEventsModule],
  declarations: [
    LoginComponent,
    SignupComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    ProfileComponent,
    ChatComponent,
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    ChangePasswordComponent,
    ResetPasswordComponent,
    ProfileComponent,
    ChatComponent,
  ],
})
export class AccountModule {}
