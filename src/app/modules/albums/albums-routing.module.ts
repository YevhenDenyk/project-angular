import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AlbumsComponent} from "./components/albums/albums.component";
import {AlbumDetailComponent} from "./components/album-detail/album-detail.component";

const routes: Routes = [
  {
    path: '', component: AlbumsComponent, children: [
      {path: ':id', component: AlbumDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule {
}
