import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PostsComponent} from "./components/posts/posts.component";
import {PostDetailComponent} from "./components/post-detail/post-detail.component";

const routes: Routes = [
  {
    path:'',component:PostsComponent,children:[
      {path:':id',component:PostDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
