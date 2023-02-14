import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {ICar} from "../../interface";
import {CarService} from "../../service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: ICar[]
  form: FormGroup
  updateCar: ICar | null

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
        // Validators.pattern('^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$'),
        Validators.minLength(1),
        Validators.maxLength(20)
      ]),
      price: new FormControl('', [
        Validators.min(0),
        Validators.max(1000000),
        Validators.required
      ]),
      year: new FormControl('', [
        Validators.min(1990),
        Validators.max(new Date().getFullYear()),
        Validators.required
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

  carForUpdate(car: ICar) {
    this.updateCar = car
    this.form.setValue({
      brand: car.brand,
      price: car.price,
      year: car.year
    })
  }

  deleteCar(idCar: number) {
    this.carService.delete(idCar).subscribe(()=>{
      const index = this.cars.findIndex(car => car.id === idCar);
      this.cars.splice(index,1)
    })
  }
}
