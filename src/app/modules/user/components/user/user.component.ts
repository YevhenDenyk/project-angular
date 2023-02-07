import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from "../../interfaces/user.interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input()
  user: IUser
  @Output()
  setUser = new EventEmitter<IUser>()

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  detail(): void {
    this.router.navigate([this.user.id], {
      relativeTo: this.activatedRoute,
      state: {user: this.user}
    })
  }

  lift(): void {
    this.setUser.emit(this.user)
  }
}
