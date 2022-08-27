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
  constructor(private incoming: BuyerComponent, private buyer: BuyerService) { }
  @Input() userId = '';
  assets: IAssets[] = [];
  ngOnInit(): void {
    this.assets = this.buyer.displayAssets(this.userId);
    //console.log(this.assets.);
  }
  sendAssetId(assetId: number) {
    this.buyer.sendAssetId(assetId);
  }
}