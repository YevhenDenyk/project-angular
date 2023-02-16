import {Component, OnInit} from '@angular/core';
import {ICar} from "../../interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {CarService} from "../../services";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: ICar[]
  carForUpdate: ICar | null
  form: FormGroup

  constructor(private carService: CarService) {
    this.initForm()
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => this.cars = value)
  }

  initForm(): void {
    this.form = new FormGroup({
      brand: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20)
      ]),
      year: new FormControl(null, [
        Validators.required,
        Validators.min(1990),
        Validators.max(new Date().getFullYear())
      ]),
      price: new FormControl(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(1000000)
      ])
    })
  }

  clickForm(): void {
    if (!this.carForUpdate) {
      this.carService.create(this.form.value).subscribe(value => {
        this.cars.push(value)
      })
    } else {
      this.carService.update(this.carForUpdate.id, this.form.value).subscribe(value => {
        const find = this.cars.find(car => car.id === this.carForUpdate?.id);
        Object.assign(find!, value);
        this.carForUpdate = null
      })
      this.form.reset()
    }
  }

  deleteCar(id: number): void {
    this.carService.delete(id).subscribe(() => {
      const index = this.cars.findIndex(car => car.id === id);
      this.cars.splice(index, 1)
    })
  }

  updateCar(car: ICar): void {
    this.carForUpdate = car;
    this.form.setValue({
      brand: car.brand,
      year: car.year,
      price: car.price
    })
  }
}
