import {Component, OnInit} from '@angular/core';
import {LoadService} from "../../services/load.service";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  isLoading: boolean

  constructor(private loadService: LoadService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadService.isLoading().subscribe(value => this.isLoading = value);

    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        this.loadService.startLoading()
      } else if (e instanceof NavigationEnd) {
        this.loadService.endLoading()
      }
    })
  }
}
