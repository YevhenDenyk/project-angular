import {Component, OnInit} from '@angular/core';
import {IUser} from "../../interfaces/user.interfaces";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[]
  user: IUser

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value)
  }

  setUsers(setUser: IUser) {
    this.user = setUser
  }
}
