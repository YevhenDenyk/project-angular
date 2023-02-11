import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IAlbum} from "../../interfaces/album.interfaces";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: IAlbum[]
  album: IAlbum

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(({albums}) => this.albums = albums)
  }

  setAlbum(set: IAlbum) {
    this.album = set
  }
}
