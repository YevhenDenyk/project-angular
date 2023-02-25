import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

import {AuthService} from "../../services";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  form: FormGroup;
  error = false;

  constructor(
    private authService: AuthService,
    private dialogRef: MatDialogRef<LoginFormComponent>,
    private router: Router
  ) {
    this.initForm()
  }

  initForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  login(): void {
    this.authService.login(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/cars'])
        this.dialogRef.close()
        this.error = false
      },
      error: () => {
        this.error = true
      }
    })
  }
}
