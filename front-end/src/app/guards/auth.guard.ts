import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth : AuthService, private router: Router, private toast: NgToastService){

  }
  canActivate(): boolean {
    console.log('AuthGuard canActivate called');
    if (this.auth.isLoggedIn()) {
      //console.log('User is logged in');
      return true;
    } else {
      //console.log('User is not logged in');
      // this.toast.error({ detail: "ERROR", summary: "Please Login First!" });
      this.router.navigate(['login']);
      return false;
    }
  }
  
  }
