import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICar} from "../../interfaces";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input()
  car: ICar

  @Output()
  updateCar = new EventEmitter<ICar>()

  @Output()
  deleteCar = new EventEmitter<number>()

  update(): void {
    this.updateCar.emit(this.car)
  }

  delete(): void {
    this.deleteCar.emit(this.car.id)
  }
}
