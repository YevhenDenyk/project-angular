import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IAlbum} from "../../interfaces/album.interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  @Input()
  album: IAlbum
  @Output()
  setAlbum = new EventEmitter<IAlbum>()

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  lift(): void {
    this.setAlbum.emit(this.album)
  }

  detail(): void {
    this.router.navigate([this.album.id], {
      relativeTo: this.activatedRoute,
      state: {album: this.album}
    })
  }
}
