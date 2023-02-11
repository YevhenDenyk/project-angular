import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from "./components/users/users.component";
import {UserDetailComponent} from "./components/user-detail/user-detail.component";
import {UsersResolver} from "./services/resolves/users.resolver";
import {UserResolver} from "./services/resolves/user.resolver";

const routes: Routes = [
  {
    path: '', component: UsersComponent, resolve: {users: UsersResolver}, children: [
      {path: ':id', resolve: {user: UserResolver}, component: UserDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
