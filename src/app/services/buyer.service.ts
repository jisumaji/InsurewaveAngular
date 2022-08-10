import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs'
import { IAssets } from '../models/assets.model'

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  constructor(private buyer: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log('error :', error)
      return of(result as T);
    }
  }
  displayAssets(userId: string) {
    let assets: IAssets[] = [];
    this.buyer.get('/buyer/DisplayAssets/' + userId, { responseType: "json" })
      .pipe(catchError(this.handleError<string>('displayAssets')))
      .subscribe((data: IAssets[] | any) => {
        // console.log(data);
        data.forEach((a: IAssets) => {
          let tempAsset: IAssets = {
            assetId: a.assetId,
            userId: a.userId,
            countryId: a.countryId,
            assetName: a.assetName,
            priceUsd: a.priceUsd,
            type: a.type,
            request: a.request
          }
          assets.push(tempAsset);
        });
      })
    // console.log(assets);
    return assets;
  }
}
