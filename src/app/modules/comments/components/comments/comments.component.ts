import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IComment} from "../../interfaces/comment.interface";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  comments: IComment[]
  comment: IComment

  constructor(private activatedRoute:ActivatedRoute) {
  }

  ngOnInit():void {
    this.activatedRoute.data.subscribe(({comments}) =>this.comments = comments)
  }

  setComment(set: IComment) {
    this.comment = set
  }
}
