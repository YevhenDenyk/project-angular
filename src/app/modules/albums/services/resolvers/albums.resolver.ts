import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable} from 'rxjs';
import {AlbumService} from "../album.service";
import {IAlbum} from "../../interfaces/album.interfaces";

@Injectable({
  providedIn: 'root'
})
export class AlbumsResolver implements Resolve<IAlbum[]> {
  constructor(private service:AlbumService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAlbum[]> {
    return this.service.getAll()
  }
}
