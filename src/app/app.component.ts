import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',

})
export class AppComponent implements OnInit {
  constructor(private router: Router, private matDialog: MatDialog) {
  }

      //робимо так, щоб закривалися всі діалоги коли ми переходимо на інші посилання та щоб не збільшувалася кількість одночасно відкритих діалогів
  ngOnInit():void {
    this.router.events.subscribe(() => {
      this.matDialog.closeAll();
    })
  }
}
