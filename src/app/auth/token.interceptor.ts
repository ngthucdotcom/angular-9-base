// src/app/auth/token.interceptor.ts
import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const accessToken = this.auth.getToken();

    // If access token is null this means that user is not logged in
    // And we return the original request
    if (!accessToken) {
      return next.handle(request);
    }

    // We clone the request, because the original request is immutable
    return next.handle(request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    }));
  }
}
