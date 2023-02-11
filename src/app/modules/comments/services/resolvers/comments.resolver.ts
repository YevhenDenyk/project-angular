import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {IComment} from "../../interfaces/comment.interface";
import {CommentsService} from "../comments.service";

@Injectable({
  providedIn: 'root'
})
export class CommentsResolver implements Resolve<IComment[]> {
  constructor(private commentsService: CommentsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment[]> {
    return this.commentsService.getAll()
  }
}
