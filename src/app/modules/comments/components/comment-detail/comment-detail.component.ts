import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {CommentsService} from "../../services/comments.service";
import {IComment} from "../../interfaces/comment.interface";

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent {
  comment: IComment
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private service:CommentsService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.comment= this.router.getCurrentNavigation()?.extras.state?.['album']

      if (!this.comment) {
        this.service.getById(id).subscribe(value => this.comment = value)
      }
    })
  }
}
