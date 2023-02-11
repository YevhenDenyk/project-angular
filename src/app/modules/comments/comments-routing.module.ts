import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailComponent} from "./components/comment-detail/comment-detail.component";
import {CommentsResolver} from "./services/resolvers/comments.resolver";
import {CommentResolver} from "./services/resolvers/comment.resolver";

const routes: Routes = [
  {
    path: '', component: CommentsComponent, resolve:{comments:CommentsResolver} ,children: [
      {path: ':id', component: CommentDetailComponent, resolve:{comment: CommentResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule {
}
