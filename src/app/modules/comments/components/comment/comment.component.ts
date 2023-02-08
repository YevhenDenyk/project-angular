import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IComment} from "../../interfaces/comment.interface";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input()
  comment: IComment
  @Output()
  setComment = new EventEmitter<IComment>()

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  lift(): void {
    this.setComment.emit(this.comment)
  }

  detail(): void {
    this.router.navigate([this.comment.id], {
      relativeTo: this.activatedRoute,
      state: {album: this.comment}
    })
  }
}
