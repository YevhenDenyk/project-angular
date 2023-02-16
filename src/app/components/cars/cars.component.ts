import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {ICar} from "../../interfaces";
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
    this.initialForm()
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => this.cars = value)
  }

  initialForm(): void {
    this.form = new FormGroup({
      brand: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$')
      ]),
      year: new FormControl(null, [
        Validators.required,
        Validators.min(1990),
        Validators.max(new Date().getFullYear())
      ]),
      price: new FormControl(null, [
        Validators.required,
        Validators.min(1),
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
        this.carForUpdate = null;
      })
    }
    this.form.reset()
  }

  updateCar(car: ICar) {
    this.carForUpdate = car;
    this.form.setValue({
      brand: car.brand,
      year: car.year,
      price: car.price
    })
  }

  deleteCar(id: number): void {
    this.carService.delete(id).subscribe(() => {
      const index = this.cars.findIndex(car => car.id === id);
      this.cars.splice(index, 1)
    })
  }
}
