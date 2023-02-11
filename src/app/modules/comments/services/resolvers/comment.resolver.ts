import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import {CommentsService} from "../comments.service";
import {IComment} from "../../interfaces/comment.interface";

@Injectable({
  providedIn: 'root'
})
export class CommentResolver implements Resolve<IComment> {
  constructor(private commentsService:CommentsService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment> {
    let {id} = route.params
    return this.commentsService.getById(id)
  }
}
