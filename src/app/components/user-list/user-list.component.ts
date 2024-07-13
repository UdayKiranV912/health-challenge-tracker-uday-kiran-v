import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchName: string = '';
  filterType: string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.filteredUsers = this.users;
  }

  searchUsers() {
    this.filteredUsers = this.users.filter(user => 
      user.name.toLowerCase().includes(this.searchName.toLowerCase()));
  }

  filterUsers() {
    if (this.filterType) {
      this.filteredUsers = this.users.filter(user => 
        user.workouts.some(workout => workout.type === this.filterType));
    } else {
      this.filteredUsers = this.users;
    }
  }
}
