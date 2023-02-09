import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutsComponent} from "./layouts/main-layouts/main-layouts.component";

const routes: Routes = [
  {
    path:'',component:MainLayoutsComponent, children:[
      {path:'', redirectTo:'users',pathMatch:"full"},
      {path:'users',  loadChildren: () => import('./modules/users/users.module').then(value => value.UsersModule)},
      {path:'posts', loadChildren:()=> import('./modules/posts/posts.module').then(value => value.PostsModule)},
      {path:'comments', loadChildren:() => import('./modules/comments/comments.module').then(value => value.CommentsModule)},
      {path:'todos', loadChildren:() => import('./modules/todos/todos.module').then(value => value.TodosModule)},
      {path:'albums', loadChildren:() => import('./modules/albums/albums.module').then(value => value.AlbumsModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
