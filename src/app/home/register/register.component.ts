import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserDetails } from '../models/userDetails.model';
import { UserDetailsService } from '../user-details.service'
import {Router} from'@angular/router'
declare var $: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  buyerSelected = 'buyer';
  registerForm: FormGroup | any;
  userDetails: IUserDetails | any;
  constructor(private builder: FormBuilder, private user: UserDetailsService,private route:Router) { }

  show(value: any) {
    this.buyerSelected = value;
  }
  register() {
    this.submitted = true;
    // console.log(this.registerForm.value)    
    if (this.registerForm.valid) {
      /*this.userDetails: IUserDetails = {
        userId: this.registerForm.get('userId').value,
        password: this.registerForm.get('password').value,
        firstName: this.registerForm.get('firstName').value,
        lastName: this.registerForm.get('lastName').value,
        gender: this.registerForm.get('gender').value,
        role: this.registerForm.get('role').value,
        licenseId: this.registerForm.get('licenseId').value
      }*/
      this.userDetails = this.registerForm.value
      console.log(this.userDetails);
      this.user.register(this.userDetails).subscribe(/*(res) => {
        console.log(res);
        
      }*/
     
      );
      this.route.navigate(['/login']);
    }
  }
  ngOnInit(): void {
    this.registerForm = this.builder.group({
      userId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]],
      firstName: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      gender: ['', [Validators.required]],
      role: ['', Validators.required],
      licenseId: [null]
    })
    this.registerForm.get('role').valueChanges.subscribe((ab: string) => {
      const id = this.registerForm.get('licenseId')
      if (ab == 'broker' || ab == 'insurer') {
        id.setValidators([Validators.required]);
      }
      else{
        id.clearValidators();
        id.value=null;
      }
      id.updateValueAndValidity();
    })

    $("#ConfirmPassword").on('keyup', function () {
      var password = $("#Password").val();
      var confirmPassword = $("#ConfirmPassword").val();
      if (password != confirmPassword || password === "") {
        if (password != "") { $("#CheckPasswordMatch").html("Password does not match !").css("color", "red"); }
        $("#butt").prop("disabled", true);
      }

      else {
        if (password != "") { $("#CheckPasswordMatch").html("Passwords match").css("color", "green"); }
        $("#butt").show();
        $("#butt").prop("disabled", false);
      }

    });
    $("#Password").on('keyup', function () {
      var password = $("#Password").val();
      var confirmPassword = $("#ConfirmPassword").val();
      if (password != confirmPassword || password === "") {
        if (password != "") {
          $("#CheckPasswordMatch").html("Password does not match !").css("color", "red");
        }
        $("#butt").prop("disabled", true);
      }

      else {
        if (password != "") {
          $("#CheckPasswordMatch").html("Passwords match").css("color", "green");
        }
        $("#butt").show();
        $("#butt").prop("disabled", false);
      }

    });

    $('#eye').click(function () {
      var eye = $("#eye")
      if ($(eye).hasClass('fa-eye-slash')) {

        $(eye).removeClass('fa-eye-slash');

        $(eye).addClass('fa-eye');

        $('#Password').attr('type', 'text');

      } else {

        $(eye).removeClass('fa-eye');

        $(eye).addClass('fa-eye-slash');

        $('#Password').attr('type', 'password');
      }
    });
    $('#eye1').click(function () {
      var eye1 = $("#eye1")
      if ($(eye1).hasClass('fa-eye-slash')) {

        $(eye1).removeClass('fa-eye-slash');

        $(eye1).addClass('fa-eye');

        $('#ConfirmPassword').attr('type', 'text');

      } else {

        $(eye1).removeClass('fa-eye');

        $(eye1).addClass('fa-eye-slash');

        $('#ConfirmPassword').attr('type', 'password');
      }
    });
  }
}
