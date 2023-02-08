import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumComponent } from './components/album/album.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import {AlbumService} from "./services/album.service";


@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumComponent,
    AlbumDetailComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule
  ],
  providers:[
    AlbumService
  ]
})
export class AlbumsModule { }
