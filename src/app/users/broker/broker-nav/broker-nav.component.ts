import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-broker-nav',
  templateUrl: './broker-nav.component.html',
  styleUrls: ['./broker-nav.component.css']
})
export class BrokerNavComponent implements OnInit {

  @Input() brokerName:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
