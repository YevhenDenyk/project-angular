import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";

import {AuthService} from "../../services";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  form: FormGroup
  error= false;

  constructor(private router: Router, private authService: AuthService, private matDialogRef: MatDialogRef<RegisterFormComponent>) {
    this.initForm()
  }

  initForm(): void {
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

  register(): void {
    this.authService.register(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/login']);
        this.error = false;
        this.matDialogRef.close()
      },
      error: () => {
        this.error = true
      }
    })
  }
}
