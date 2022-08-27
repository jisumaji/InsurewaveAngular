import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAssets } from 'src/app/models/assets.model';
import { BuyerComponent } from '../buyer.component';
import{BuyerService} from '../../../services/buyer.service'
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
  asset2: IAssets | any;
  //AssetId: number = 0;
 // request:string="";
  country:ICountry[]=[];
  cntry:ICountry|any;
  selected = "----";
  types:{value:string, Text:string}[]=[
    { "value":"Engine", "Text" : "Engine" },
    { "value" :"Container", "Text" : "Container" },
   { "value" :"Ship", "Text" : "Ship" },
    {"value" : "Anchor", "Text" :"Anchor" },
    {"value" : "Crane", "Text" : "Crane" }
  ];
  selected2: any;
  constructor(private route1: ActivatedRoute, private incoming: BuyerComponent, private builder: FormBuilder, private buyer: BuyerService, private route: Router) { }
  @Input() userId = '';
  employeeId = "";
  ngOnInit(): void {
    this.EditAssetForm = this.builder.group({
      countryId:  ['', [Validators.required]],
      assetName: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      priceUsd: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      type: ['', [Validators.required]]
    })
    this.buyer.emitter.subscribe(ass=>{
      this.asset2=ass;
    })
    /*
    setTimeout(() => {
      console.log(this.asset2);
    }, 200);
    */
    this.country=this.buyer.getCountries();
      console.log(this.types);
  }
  update(e:any){
    this.selected = e.target.value
  }
  update2(e1:any){
    this.selected2 = e1.target.value
  }
  editAsset() {
    this.submitted = true;
    //console.log(this.EditAssetForm.value)
    if (this.EditAssetForm.valid) {
      this.asset1 = {
        assetId: this.asset2.assetId,
        userId: this.userId,
        countryId: this.selected,
        assetName: this.EditAssetForm.get('assetName').value,
        priceUsd: this.EditAssetForm.get('priceUsd').value,
        type: this.EditAssetForm.get('type').value,
        request: this.asset2.request
      }
      console.log(this.asset1);
      this.buyer.editAsset(this.asset1, this.asset2.assetId).subscribe(/*(res) => {
        console.log(res);
        
      }*/

      );
      this.route.navigate(['/users/buyer/assets']);
    }
  }

}
