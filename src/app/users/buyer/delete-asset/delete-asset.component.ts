import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAssets } from 'src/app/models/assets.model';
import { BuyerService } from 'src/app/services/buyer.service';
import { DisplayAssetsComponent } from '../display-assets/display-assets.component';

@Component({
  selector: 'app-delete-asset',
  templateUrl: './delete-asset.component.html',
  styleUrls: ['./delete-asset.component.css']
})
export class DeleteAssetComponent implements OnInit {
  asset: IAssets | any;
  window: any;
 // alertService: any;
 // window: any;
  constructor(private buyer: BuyerService,private route: Router) 
  { 
    
  }
  ngOnInit(): void {
    this.buyer.emitter.subscribe(ass=>{
      this.asset=ass;
  })
  setTimeout(() => {
    console.log(this.asset.assetId);
  },169);
  }
  DeleteAsset(assetid:number){

    this.buyer.DeleteAsset(assetid)
    .subscribe((result)=>
    {

    }
    ); 
 this.route.navigate(['/users/buyer/assets']);
 this.window.location.reload();
  }
}
