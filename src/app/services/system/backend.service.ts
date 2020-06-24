import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  /**
   * Environment
   */
  BACKEND_PATH = environment.backend_url;

  /**
   * Header
   */
  headers: any = {
    'Content-Type': 'application/json',
  };

  options = {headers: this.headers, withCredentials: false};

  constructor(private http: HttpClient) {
  }

  /**
   * Standard method
   */
  public get(url, options): Observable<any> {
    return this.http.get<any>(`${this.BACKEND_PATH}/${url}`, options || this.options);
  }

  public post(url, body, options): Observable<any> {
    return this.http.post<any>(`${this.BACKEND_PATH}/${url}`, body, options || this.options);
  }

  public getFullPath(fullurl, options): Observable<any> {
    return this.http.get<any>(`${fullurl}`, options || this.options);
  }

  public postFullPath(fullurl, body, options): Observable<any> {
    return this.http.post<any>(`${fullurl}`, body, options || this.options);
  }

  public put(url, body, options): Observable<any> {
    return this.http.put<any>(`${this.BACKEND_PATH}/${url}`, body, options || this.options);
  }

  public del(url, options): Observable<any> {
    return this.http.delete<any>(`${this.BACKEND_PATH}/${url}`, options || this.options);
  }
}
