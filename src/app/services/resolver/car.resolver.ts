import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import {ICar, IPaginatedData} from "../../interfaces";
import {CarService} from "../car.service";

@Injectable({
  providedIn: 'root'
})
export class CarResolver implements Resolve<IPaginatedData<ICar>> {
  constructor(private carService:CarService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPaginatedData<ICar>> {
    const page = route.queryParams['page'];

    return this.carService.getAll(page)

  }
}
