import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAssets } from 'src/app/models/assets.model';
import { BuyerComponent } from '../buyer.component';
import { BuyerService } from '../../../services/buyer.service'
import { ICountry } from 'src/app/models/countries.model';

@Component({
  selector: 'app-edit-asset',
  templateUrl: './edit-asset.component.html',
  styleUrls: ['./edit-asset.component.css']
})
export class EditAssetComponent implements OnInit {

  submitted = false;
  EditAssetForm: FormGroup | any;
  asset1: IAssets | any;
  AssetId: number = 0;
  countries: ICountry[] = [];
  constructor(private route1: ActivatedRoute, private incoming: BuyerComponent, private builder: FormBuilder, private buyer: BuyerService, private route: Router) { }
  @Input() userId = '';
  employeeId = "";
  ngOnInit(): void {
    this.EditAssetForm = this.builder.group({
      //countryId:  ['', [Validators.required, Validators.pattern('/^-?(0|[1-9]\d*)?$/')]],
      assetName: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      priceUsd: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      type: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]]
    })
    this.buyer.emitter.subscribe(ass => {
      this.AssetId = ass;
    })
    // this.buyer.getCountries().then((a:ICountry[])=>this.countries=a);
    // setTimeout(()=>{console.log(this.buyer.getCountries());},3000);
    this.buyer.getCountries().then((x:ICountry[])=>{
      console.log(x);
    });
    // console.log(this.countries);
    
    // console.log(JSON.stringify(this.countries));
    // for (var ind in this.countries) { 
    //   console.log(ind) ;
    // }
  }
  editAsset() {
    this.submitted = true;
    console.log(this.EditAssetForm.value)
    console.log(this.EditAssetForm.valid)
    if (this.EditAssetForm.valid) {

      this.asset1 = {
        assetId: this.AssetId,
        userId: this.userId,
        countryId: 91,
        assetName: this.EditAssetForm.get('assetName').value,
        priceUsd: this.EditAssetForm.get('priceUsd').value,
        type: this.EditAssetForm.get('type').value,
        request: 'no'
      }
      /*
      this.asset1={
        assetId: 100005,
        userId: 'aishwarya@13',
        countryId: 91,
        assetName: 'okkkk',
        priceUsd: 134,
        type: 'me',
        request: 'no'
      }
      */
      //this.asset1= this.EditAssetForm.value
      console.log(this.asset1);
      this.buyer.editAsset(this.asset1, this.AssetId).subscribe(/*(res) => {
        console.log(res);
        
      }*/

      );
      this.route.navigate(['/home']);
    }
  }

}