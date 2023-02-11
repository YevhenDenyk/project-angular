import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IComment} from "../../interfaces/comment.interface";

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {
  comment: IComment

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({comment}) => this.comment = comment)
  }
}
