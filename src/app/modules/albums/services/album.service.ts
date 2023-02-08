import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAlbum} from "../interfaces/album.interfaces";
import {urls} from "../../../configs";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<IAlbum[]>{
    return this.httpClient.get<IAlbum[]>(urls.albums)
  }

  getById(id:number): Observable<IAlbum>{
    return this.httpClient.get<IAlbum>(`${urls.albums}/${id}`)
  }
}
