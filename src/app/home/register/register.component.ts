import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  buyerSelected!: string;
  ngOnInit(): void {
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
