import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from "./components/users/users.component";
import {UserDetailComponent} from "./components/user-detail/user-detail.component";
import {UsersResolver} from "./services/resolvers/users.resolver";
import {UserResolver} from "./services/resolvers/user.resolver";

const routes: Routes = [
  {
    path: '', resolve: {users: UsersResolver}, component: UsersComponent, children: [
      {path: ':id', resolve: {user: UserResolver}, component: UserDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
