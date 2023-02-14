import {Component, EventEmitter, Input, Output} from '@angular/core';

import {ICar} from "../../interface";


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input()
  car: ICar

  @Output()
  carForUpdate = new EventEmitter<ICar>()
  @Output()
  deleteCar = new EventEmitter<number>()


  update(): void {
    this.carForUpdate.emit(this.car)
  }

  delete(): void {
    this.deleteCar.emit(this.car.id)
  }
}
