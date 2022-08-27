import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, BehaviorSubject } from 'rxjs'
import { IAssets } from '../models/assets.model'
import { ICountry } from '../models/countries.model'
@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  reloadCurrentRoute() {
    throw new Error('Method not implemented.');
  }
  private assetData: IAssets ={
    assetId: 0,
    userId: "null",
    countryId: 0,
    assetName: "null",
    priceUsd: 0,
    type: "null",
    request: "no"
}
  /*private bsubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  emitter: Observable<any> = this.bsubject.asObservable();
  */
  private commonData: BehaviorSubject<IAssets> = new BehaviorSubject<IAssets>(this.assetData);
  emitter: Observable<any> = this.commonData.asObservable();

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
  editAsset(Asset: IAssets, assetId: number) {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.buyer.put('/buyer/EditAsset/' + assetId, Asset, { headers: options, responseType: 'text' })
      .pipe(catchError(this.handleError('editAsset')))

  }
  sendAssetId(asset: IAssets) {
    this.commonData.next(asset);
  }
  getCountries() {
    let countries:ICountry[]=[];
    this.buyer.get('/buyer/GetCountries', { responseType: 'json' }).pipe(catchError(this.handleError('getCountries')))
    .subscribe((response:ICountry[]|any)=>{
      response.forEach((x:ICountry) => {
        let temp:ICountry={
          countryId :x.countryId,
          countryName: x.countryName,
          rate: x.rate
        }
        countries.push(temp);
      });
    });
    return countries;
  }
  DeleteAsset (assetid:number){
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.buyer.delete('/buyer/DeleteAsset'+"/"+assetid);
  }
}