import {Component, Input, Output} from '@angular/core';
import {ICar} from "../../interfaces";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input()
  car: ICar
  panelOpenState = false;



}
