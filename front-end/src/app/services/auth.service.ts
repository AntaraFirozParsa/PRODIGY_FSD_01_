import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { Router } from '@angular/router'; // Correct import

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = 'https://localhost:7058/api/User/';
 // private userPayload: any;
  
  constructor(private http: HttpClient,private router: Router) {}

  signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}register`, userObj);
  }

  login(loginObj: any) {
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj);
    
  }

  signOut(){
    localStorage.clear();
    this.router.navigate(['login'])
  }
  storeToken(tokenValue: string){
    localStorage.setItem('token', tokenValue)
  }
  getToken(){
    return localStorage.getItem('accesstoken')
  }
  isLoggedIn(): boolean{
   return !!localStorage.getItem('accesstoken')
  }
}
