import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ICar} from "../../interfaces";


@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent {
  form: FormGroup
  // updateCar: ICar | null

  @Output()
  saveCar = new EventEmitter<ICar>()



  formClick(): void {
    this.saveCar.emit(this.form.value)
  }


}
