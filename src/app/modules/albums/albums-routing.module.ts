import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AlbumsComponent} from "./components/albums/albums.component";
import {AlbumDetailComponent} from "./components/album-detail/album-detail.component";
import {AlbumsResolver} from "./services/resolvers/albums.resolver";
import {AlbumResolver} from "./services/resolvers/album.resolver";

const routes: Routes = [
  {
    path: '', component: AlbumsComponent, resolve: {albums: AlbumsResolver}, children: [
      {path: ':id', resolve: {album: AlbumResolver}, component: AlbumDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule {
}
