import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, BehaviorSubject } from 'rxjs'
import { IAssets } from '../models/assets.model'
import { ICountry } from '../models/countries.model'
@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  private bsubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  emitter: Observable<any> = this.bsubject.asObservable();

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
  sendAssetId(assetId: number) {
    this.bsubject.next(assetId);
  }
  // getCountries() {
  //   let countries: ICountry[] = [];
  //   this.buyer.get('/buyer/GetCountries', { responseType: 'json' }).pipe(catchError(this.handleError('getCountries')))
  //     .subscribe((response: ICountry[] | any) => {
  //       response.forEach((x: ICountry) => {
  //         let temp: ICountry = {
  //           countryId: x.countryId,
  //           countryName: x.countryName,
  //           rate: x.rate
  //         }
  //         countries.push(temp);
  //       });
  //     });
  //   setTimeout(() => { 
  //     console.log(countries);
  //     return countries }, 2000);
  // }
  // async getCountries(): Promise<ICountry[]> {
  //   let countries: ICountry[] = [];
  //   await new Promise<ICountry[]>(resolve => {

  //     this.buyer.get('/buyer/GetCountries', { responseType: 'json' }).pipe(catchError(this.handleError('getCountries')))
  //       .subscribe((response: ICountry[] | any) => {
  //         response.forEach((x: ICountry) => {
  //           let temp: ICountry = {
  //             countryId: x.countryId,
  //             countryName: x.countryName,
  //             rate: x.rate
  //           }
  //           countries.push(temp);
  //         });
  //       });
  //     setTimeout(() => {
  //       resolve(countries);
  //     }, 500)
  //   })
  //   console.log(countries[0]);
  //   return countries;
  // }
  async getCountries(): Promise<ICountry[]> {
    let countries: ICountry[] = [];
    
     let result=await this.buyer.get('/buyer/GetCountries', { responseType: 'json' }).pipe(catchError(this.handleError('getCountries')))
        .subscribe((response: ICountry[] | any) => {
          response.forEach((x: ICountry) => {
            let temp: ICountry = {
              countryId: x.countryId,
              countryName: x.countryName,
              rate: x.rate
            }
            countries.push(temp);
          });
          return countries;
        });
    console.log(countries[0]);
    return result;
  }
}