import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../../services/user-details.service';
import { IUserDetails } from '../../models/userDetails.model'
@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  private buyerData:IUserDetails={
    userId: "null",
    password: "null",
    firstName: "null",
    lastName: "null",
    gender: "male",
    role: "buyer",
    licenseId: -1,
  }
  buyerName:string='';
  constructor(private user: UserDetailsService) { }

  ngOnInit(): void {
    this.user.emitData.subscribe(result => {
      // console.log(result);
      this.buyerData.userId = result.userId;
      this.buyerData.password = result.password;
      this.buyerData.firstName = result.firstName;
      this.buyerData.lastName = result.lastName;
      this.buyerData.gender = result.gender;
      this.buyerData.role = result.role;
      this.buyerData.licenseId = result.licenseId;
      this.buyerName=this.buyerData.firstName;
    });
  }
}