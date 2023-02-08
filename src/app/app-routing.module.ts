import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: "full"},
      {path: 'users', loadChildren: () => import('./modules/user/user.module').then(value => value.UserModule)},
      {
        path: 'comments',
        loadChildren: () => import('./modules/comments/comments.module').then(value => value.CommentsModule)
      },
      {path: 'albums', loadChildren: () => import('./modules/albums/albums.module').then(value => value.AlbumsModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
