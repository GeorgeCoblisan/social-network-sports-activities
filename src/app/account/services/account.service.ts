import { Injectable } from '@angular/core';

import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AccountService {
  users: User[] = [
    {
      name: 'George',
      email: 'george@gmail.com',
      password: 'george',
    },
    {
      name: 'Darius',
      email: 'darius@gmail.com',
      password: 'darius',
    },
    {
      name: 'Razvan',
      email: 'razvan@gmail.com',
      password: 'razvan',
    },
    {
      name: 'Aless',
      email: 'aless@gmail.com',
      password: 'aless',
    },
  ];

  userLogged!: User;

  emailResetPassword!: string;

  getUser(): User {
    return this.userLogged;
  }

  getUsers(): User[] {
    return this.users;
  }

  checkLogin(email: string, password: string): boolean {
    const user = this.users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      this.userLogged = user;
      return true;
    }

    return false;
  }

  signUp(user: User): boolean {
    if (this.users.find((u) => u.email === user.email)) {
      return false;
    }

    this.userLogged = user;
    this.users.push(user);
    return true;
  }

  checkIfEmailExists(email: string): boolean {
    return this.users.find((user) => user.email === email)
      ? ((this.emailResetPassword = email), true)
      : false;
  }

  changePassword(password: string): boolean {
    if (this.emailResetPassword) {
      const user = this.users.find(
        (user) => user.email === this.emailResetPassword
      );
      user!.password = password;
      return true;
    }

    return false;
  }
}
