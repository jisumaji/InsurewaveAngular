import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../../services/user-details.service';
import { IUserDetails } from '../../models/userDetails.model';
@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.css']
})
export class BrokerComponent implements OnInit {

  private brokerData: IUserDetails = {
    userId: "null",
    password: "null",
    firstName: "null",
    lastName: "null",
    gender: "male",
    role: "buyer",
    licenseId: -1,
  }
  brokerName: string = '';
  constructor(private user: UserDetailsService) { }

  ngOnInit(): void {
    this.user.emitData.subscribe(result => {
      // console.log(result);
      this.brokerData.userId = result.userId;
      this.brokerData.password = result.password;
      this.brokerData.firstName = result.firstName;
      this.brokerData.lastName = result.lastName;
      this.brokerData.gender = result.gender;
      this.brokerData.role = result.role;
      this.brokerData.licenseId = result.licenseId;
      this.brokerName = this.brokerData.firstName;
    });

  }

}
