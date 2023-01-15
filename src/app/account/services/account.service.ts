import { Injectable } from '@angular/core';

import { EventType } from 'src/app/social-events/models/event-type.model';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AccountService {
  users: User[] = [
    {
      name: 'George',
      email: 'george@gmail.com',
      password: 'george',
      xp: 0,
      level: 1,
      events: [
        {
          id: 1,
          name: 'Event 1',
          image: 'string',
          date: 1673697715000,
          type: EventType.Running,
          user: [{
            name: 'George',
            email: 'george@gmail.com',
            password: 'george',
          }],
          location: {
            address: 'BT Arena',
            latitude: 46.767052,
            longitude: 23.570519
          },
          comments: 0,
          likes: 5,
          totalSeats: 12,
          occupiedSeats: 12,
        },
        {
          id: 2,
          name: 'Event 2',
          image: 'string',
          date: 1674043315000,
          user: [{
            name: 'George',
            email: 'george@gmail.com',
            password: 'george',
          }],
          location: {
            address: 'Parcul sala sporturilor',
            latitude: 46.765468,
            longitude: 23.561321
          },
          type: EventType.Football,
          comments: 0,
          likes: 5,
          totalSeats: 12,
          occupiedSeats: 5,
        }
      ]
    },
    {
      name: 'Darius',
      email: 'darius@gmail.com',
      password: 'darius',
      xp: 0,
      level: 1,
    },
    {
      name: 'Razvan',
      email: 'razvan@gmail.com',
      password: 'razvan',
      xp: 0,
      level: 1,
    },
    {
      name: 'Aless',
      email: 'aless@gmail.com',
      password: 'aless',
      xp: 0,
      level: 1,
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
