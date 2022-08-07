import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'buyer-nav',
  templateUrl: './buyer-nav.component.html',
  styleUrls: ['./buyer-nav.component.css']
})
export class BuyerNavComponent implements OnInit {

  @Input() buyerName:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
