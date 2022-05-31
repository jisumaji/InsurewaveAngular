import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable,of,catchError} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private user:HttpClient) { }
  login(userId:string,password:string):string|any{
    return this.user.get('user/'+userId+'/'+password,{responseType:'text'})
    .pipe(catchError(this.handleError<boolean>('getStudents')))
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log('error :', error)
      return of(result as T);
    }
  }
}
