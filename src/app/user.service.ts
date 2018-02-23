import { Injectable } from '@angular/core';

import { HttpClient, HttpClientJsonpModule, HttpClientModule, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import  'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';
import { User } from './user';
import { Http } from '@angular/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class UserService {




private dataurl = 'api/users';  

  constructor(private http: HttpClient){}
   
  // Observable<User[]> {
    
  //   getUsers(){
	// 	return this.http.get("assets/userdata.json")
  //   		.map((response)=><User[]>response.json().data);
        
		
	// }
  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.dataurl);
      
  }

  addUser (user: User): Observable<User> {
    return this.http.post<User>(this.dataurl,user,httpOptions)
    .pipe(
      
      catchError(this.handleError<User>('addUser'))
    );

        
       
  }
  updateHero (user: User): Observable<any> {
    return this.http.put(this.dataurl, user, httpOptions).pipe(
      
      catchError(this.handleError<User>('updateHero'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

           console.error(error); // log to console instead

      

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}