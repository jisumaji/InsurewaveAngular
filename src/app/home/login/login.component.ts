import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  submitted=false
  constructor(private formbuilder:FormBuilder) { }
  ngOnInit(): void {
    this.loginForm=this.formbuilder.group({
      email:['',Validators.required],
      password:['',[Validators.required,Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]]
    });
  }

}
