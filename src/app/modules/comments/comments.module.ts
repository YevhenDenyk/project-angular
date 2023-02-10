import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommentsRoutingModule} from './comments-routing.module';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentComponent} from './components/comment/comment.component';
import {CommentDetailComponent} from './components/comment-detail/comment-detail.component';
import {CommentService} from "./services";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule
  ],
  providers: [
    CommentService
  ]
})
export class CommentsModule {
}
