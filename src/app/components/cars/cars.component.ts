import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {CarService} from "../../services/car.service";
import {ICar} from "../../interfaces";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: ICar[];
  updateCar: ICar | null
  deleteId: number
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
        Validators.minLength(1),
        Validators.maxLength(20),
        Validators.required,
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


  save(): void {
    if (!this.updateCar) {
      this.carService.create(this.form.value).subscribe(value => {
        this.cars.push(value)
      })
    } else {
      this.carService.update(this.updateCar.id, this.form.value).subscribe(value => {
        const car = this.cars.find(car => car.id === this.updateCar?.id)
        Object.assign(car!, value)
        this.updateCar = null
      })
    }
    this.form.reset()
  }

  deleteCar(id: number) {
    this.carService.delete(id).subscribe(() => {
      const index = this.cars.findIndex(car => car.id === id);
      this.cars.splice(index, 1)
    })
  }

  carForUpdate(car: ICar) {
    this.updateCar = car
    this.form.setValue({
      brand: car.brand,
      year: car.year,
      price: car.price
    })
  }

}
