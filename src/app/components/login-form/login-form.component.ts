import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";

import {AuthService} from "../../services";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  form: FormGroup
  error = false

  constructor(private router: Router, private authService: AuthService, private matDialogRef: MatDialogRef<LoginFormComponent>) {
    this._initForm()
  }

  _initForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z]\\w{1,19}$')
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern('^(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\\w\\s])[^\\s]{8,20}$')
      ])
    })
  }


  login(): void {
    this.authService.login(this.form.value).subscribe({
      next: ()=>{
        this.error = false;
        this.router.navigate(['/cars']);
        this.matDialogRef.close();
      },
      error: ()=>{
        this.error = true
      }
    })
  }
}
