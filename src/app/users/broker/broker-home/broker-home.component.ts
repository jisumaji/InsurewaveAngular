import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-broker-home',
  templateUrl: './broker-home.component.html',
  styleUrls: ['./broker-home.component.css']
})
export class BrokerHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.carousel').carousel({
      interval: 1000
  })
  }

}
