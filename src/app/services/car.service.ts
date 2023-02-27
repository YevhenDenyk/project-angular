import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";

import {ICar, IPaginatedData} from "../interfaces";
import {urls} from "../config";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

   getAll(page= 1): Observable<IPaginatedData<ICar>>{
    return this.httpClient.get<IPaginatedData<ICar>>(urls.cars, {params:{page}}).pipe(delay(2000))
   }
   create(car:ICar): Observable<ICar>{
    return this.httpClient.post<ICar>(urls.cars, car)
   }
   update(id:number, car:ICar): Observable<ICar>{
    return this.httpClient.patch<ICar>(`${urls.cars}/${id}`,car)
   }
   delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(`${urls.cars}/${id}`)
   }
}
