//import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { tap } from 'rxjs/operators';

//@Injectable({
 // providedIn: 'root'
//})
//export class AuthService {

 // private apiUrl = 'http://localhost:8080/api/auth'; 
 // private tokenKey = 'authToken';

 // constructor(private http: HttpClient) { }

  //login(credentials: { username: string, password: string }): Observable<{ token: string }> {
   // return this.http.post<{ token: string }>(`${this.apiUrl}/login`, credentials)
    //  .pipe(
     //   tap(response => {
      //    localStorage.setItem(this.tokenKey, response.token);
      //  })
      //);
 // }

 // logout(): void {
 //   localStorage.removeItem(this.tokenKey);
 // }

 // getToken(): string | null {
 //   return localStorage.getItem(this.tokenKey);
 // }

 // isLoggedIn(): boolean {
 //   return !!this.getToken();
 // }
//}