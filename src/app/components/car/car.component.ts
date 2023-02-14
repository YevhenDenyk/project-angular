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
  deleteCar = new EventEmitter<number>()

  @Output()
  sendCar = new EventEmitter<ICar>()

  delete(): void {
    this.deleteCar.emit(this.car.id)
  }

  update(): void {
    this.sendCar.emit(this.car)
  }
}
