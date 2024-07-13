import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User, Workout } from '../../models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userName: string = '';
  workoutType: string = '';
  workoutMinutes: number | null = null;

  constructor(private userService: UserService) {}

  addUser() {
    if (this.userName && this.workoutType && this.workoutMinutes !== null) {
      const newUser: User = {
        id: 0,
        name: this.userName,
        workouts: [{ type: this.workoutType, minutes: this.workoutMinutes }]
      };
      this.userService.addUser(newUser);
      this.userName = '';
      this.workoutType = '';
      this.workoutMinutes = null;
    }
  }
}
