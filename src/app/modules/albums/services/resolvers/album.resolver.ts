import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {AlbumService} from "../album.service";
import {IAlbum} from "../../interfaces/album.interfaces";

@Injectable({
  providedIn: 'root'
})
export class AlbumResolver implements Resolve<IAlbum> {
  constructor(private albumService: AlbumService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAlbum> {
    const {id} = route.params;
    return this.albumService.getById(id)
  }
}
