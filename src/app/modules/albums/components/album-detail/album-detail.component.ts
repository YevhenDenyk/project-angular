import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IAlbum} from "../../interfaces/album.interfaces";


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent {
  album: IAlbum

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(({album}) => this.album = album)
  }

}
