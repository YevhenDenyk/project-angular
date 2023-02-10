import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: "full"},
      {path: 'users', loadChildren: () => import('./modules/users/users.module').then(value => value.UsersModule)},
      {path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(value => value.PostsModule)},
      {path: 'comments', loadChildren: () => import('./modules/comments/comments.module').then(value => value.CommentsModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
