import {Component, OnInit} from '@angular/core';
import {IAlbum} from "../../interfaces/album.interfaces";
import {AlbumService} from "../../services/album.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: IAlbum[]
  album: IAlbum

  constructor(private albumService:AlbumService) {
  }

  ngOnInit():void {
    this.albumService.getAll().subscribe(value => this.albums = value)
  }

  setAlbum(set: IAlbum) {
    this.album = set
  }
}
