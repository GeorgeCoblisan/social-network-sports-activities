import { Component, OnInit } from '@angular/core';

import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userName!: string;

  userEmail!: string;

  constructor(
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
    const userLogged = this.accountService.getUser();
    console.log(userLogged);
    if (userLogged) {
      this.userEmail = userLogged.email;
      this.userName = userLogged.name;
    }
  }

}
