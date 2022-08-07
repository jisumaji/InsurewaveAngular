import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../../services/user-details.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  constructor(private user: UserDetailsService) { }

  ngOnInit(): void {
    this.user.emitData.subscribe(result => {
      console.log(result);
    });
  }

}
