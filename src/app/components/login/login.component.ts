import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

import {LoginFormComponent} from "../login-form/login-form.component";

@Component({
  selector: 'app-login',
  template: ''

})
export class LoginComponent implements OnInit {
  constructor(private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.matDialog.open(LoginFormComponent, {
      // disableClose: true, //щоб вікно не можна було закрити клацнувши поза його вмістом
      enterAnimationDuration: '1s',
      exitAnimationDuration: '1s',
      hasBackdrop: false // Щоб був доступ до всіх клікабельних кнопок на сторінці
    })
  }
}
