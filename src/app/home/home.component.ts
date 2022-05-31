import { Component, OnInit } from '@angular/core';
import {UserDetailsService} from './user-details.service'
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private user:UserDetailsService) { }

  ngOnInit(): void {
    $('.carousel').carousel({
      interval: 1000
    })

     this.user.login('abc@gmail.com','Ab@12345').subscribe((val:string)=>{console.log(val)})
  }
  gotop()
  {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior:'smooth'
    });
  }
}
