import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

  constructor() {
    if (!this.users.length) {
      this.seedInitialData();
    }
  }

  private seedInitialData() {
    this.users = [
      { id: 1, name: 'John Doe', workouts: [{ type: 'Running', minutes: 30 }, { type: 'Cycling', minutes: 45 }] },
      { id: 2, name: 'Jane Smith', workouts: [{ type: 'Swimming', minutes: 60 }, { type: 'Running', minutes: 20 }] },
      { id: 3, name: 'Mike Johnson', workouts: [{ type: 'Yoga', minutes: 50 }, { type: 'Cycling', minutes: 40 }] }
    ];
    this.saveUsers();
  }

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    user.id = this.users.length + 1;
    this.users.push(user);
    this.saveUsers();
  }

  private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
