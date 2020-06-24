import {Injectable} from '@angular/core';
import {tokenNotExpired} from "angular2-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  public getToken(): string {
    // return localStorage.getItem('token');
    return null;
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    return tokenNotExpired(null, token);
  }
}
