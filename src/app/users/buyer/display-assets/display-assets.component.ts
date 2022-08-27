import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BuyerComponent } from '../buyer.component'
import { IAssets } from '../../../models/assets.model'
import { BuyerService } from 'src/app/services/buyer.service';
@Component({
  selector: 'app-display-assets',
  templateUrl: './display-assets.component.html',
  styleUrls: ['./display-assets.component.css']
})
export class DisplayAssetsComponent implements OnInit {

  private assetData: IAssets ={
    assetId: 0,
    userId: "null",
    countryId: 0,
    assetName: "null",
    priceUsd: 0,
    type: "null",
    request: "no"
}
  //AssId:number=0;
  constructor(private incoming: BuyerComponent, private buyer: BuyerService) { }
  @Input() userId = '';
  assets: IAssets[] = [];
  ngOnInit(): void {
    this.assets = this.buyer.displayAssets(this.userId);
    this.buyer.emitter.subscribe(result => {
      // console.log(result);
      this.assetData.assetId = result.assetId;
      this.assetData.userId = result.userId;
      this.assetData.countryId = result.countryId;
      this.assetData.assetName = result.assetName;
      this.assetData.priceUsd = result.priceUsd;
      this.assetData.type= result.type;
      this.assetData.request = result.request;
    });
  }
  sendAssetId(asset:IAssets) {
    this.buyer.sendAssetId(asset);
  }
}
