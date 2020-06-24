import {Injectable} from '@angular/core';

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
    return this.getToken() != null;
  }
}
