import { Component, OnInit } from '@angular/core';
import {UserDetailsService} from '../services/user-details.service'
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
