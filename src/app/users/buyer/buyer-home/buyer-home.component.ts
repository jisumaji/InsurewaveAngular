import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-buyer-home',
  templateUrl: './buyer-home.component.html',
  styleUrls: ['./buyer-home.component.css']
})
export class BuyerHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.carousel').carousel({
      interval: 1000
    })
  }
}
