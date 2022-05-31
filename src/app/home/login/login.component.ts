import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { UserDetailsService } from '../user-details.service'
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  role = ''

  constructor(private formbuilder: FormBuilder, private user: UserDetailsService, private route: Router) { }
  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]]
    });
  }
 
  submit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.user.login(this.loginForm.get('email')!.value, this.loginForm.get('password')!.value).subscribe((val: string) => {
        this.role = val;
      });
      if (this.role === 'broker')
        this.route.navigate(['../../users/broker']);
      else if (this.role === 'buyer')
        this.route.navigate(['../../users/buyer']);
      else if (this.role === 'insurer')
        this.route.navigate(['../../users/insurer']);
      else if(this.role==='false')
        this.route.navigate(['../../users/404']);

    }
  }
}
