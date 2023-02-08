import { Component } from '@angular/core';

import {IComment} from "../../interfaces/comment.interface";
import {CommentsService} from "../../services/comments.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  comments: IComment[]
  comment: IComment

  constructor(private commentsService:CommentsService) {
  }

  ngOnInit():void {
    this.commentsService.getAll().subscribe(value => this.comments = value)
  }

  setComment(set: IComment) {
    this.comment = set
  }
}
