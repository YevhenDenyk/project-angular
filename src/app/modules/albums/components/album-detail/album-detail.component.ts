import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IAlbum} from "../../interfaces/album.interfaces";
import {AlbumService} from "../../services/album.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent {
  album: IAlbum
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private service:AlbumService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.album= this.router.getCurrentNavigation()?.extras.state?.['album']

      if (!this.album) {
        this.service.getById(id).subscribe(value => this.album = value)
      }
    })
  }

}
