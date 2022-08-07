import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of, catchError, BehaviorSubject } from 'rxjs'
import { IUserDetails } from './models/userDetails.model'
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  private commonData:BehaviorSubject<any>=new BehaviorSubject<any>("default");
  emitData:Observable<any>=this.commonData.asObservable();
  @Output() eventEmitter:EventEmitter<any>=new EventEmitter<any>();

  constructor(private user: HttpClient) { }

  sendData(dataToSend:any){
    // console.log(dataToSend);
    this.commonData.next(dataToSend);
  }
  sendData1(dataToSend:any){
    this.eventEmitter.emit(dataToSend)
  }

  login(userId: string, password: string): string | any {
    return this.user.get('user/' + userId + '/' + password, { responseType: 'text' })
      .pipe(catchError(this.handleError<boolean>('getStudents')))
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log('error :', error)
      return of(result as T);
    }
  }
  register(user: any) {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.user.post('user/', user, { headers: options, responseType: 'text' as 'json' })
      .pipe(catchError(this.handleError('register')))
  }//IUserDetails|any in parameter,and IUserDetails type or no type in post type and handleError type both works
  getUserDetails(userId: string): IUserDetails {
    var userData: IUserDetails = {
      userId: userId,
      password: "null",
      firstName: "null",
      lastName: "null",
      gender: "male",
      role: "buyer",
      licenseId: -1,
    }
    this.user.get('/user' + userId, { responseType: 'json' }).pipe(catchError(this.handleError<IUserDetails>('getUserDetails')))
      .subscribe((userDetails: IUserDetails | any) => {
        // console.log(userDetails)
        userData.userId = userId;
        userData.password = userDetails.password;
        userData.firstName = userDetails.firstName;
        userData.lastName = userDetails.lastName;
        userData.gender = userDetails.gender;
        userData.role = userDetails.role;
        userData.licenseId = userDetails.licenseId;
      })
    return userData;
  }
}
