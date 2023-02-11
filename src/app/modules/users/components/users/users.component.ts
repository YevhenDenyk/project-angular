import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUser} from "../../interfaces";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[]
  user: IUser

  constructor(private activatedRoute:ActivatedRoute) {
  }

  ngOnInit():void {
    this.activatedRoute.data.subscribe(({users}) => this.users = users)
  }

  setUser(user: any) {
    this.user = user
  }
}
