import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted: boolean = false;
  showMessage: boolean = false;

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    const _user = this.loginForm.get('user')?.value;
    const _password = this.loginForm.get('password')?.value;
    if (this.loginForm.invalid) {
      return;
    }
    this._authService.login(_user, _password).subscribe(isLogged => {
      this.showMessage = !isLogged;
    });
  }

  resetMessage(event: any): void {
    this.showMessage = false;
  }

  backToHome(): void {
    this._authService.backToHome();
  }
}
