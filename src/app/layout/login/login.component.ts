import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  // email123:string="test123";
  //email:string="test";
  constructor(private route: Router) { }

  ngOnInit() {

  }

  // Login login=new NgModel(
  //  loginpage() 
  //  {
  //    this.route.navigate(['home']);
  //   }

  register(form) {
    // alert(this.email123);
    if (form.value.Email == "test" && form.value.Password == "test") {
      localStorage.setItem('mail', form.value.Email);
      // console.log(localStorage.getItem('mail'));
      this.route.navigate(['home']);
    }
    else {
      alert("Invalid user");
    }

  }


}