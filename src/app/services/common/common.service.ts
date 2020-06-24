import {Injectable} from '@angular/core';
import {DatePipe} from '@angular/common';
import {BackendService} from '../system/backend.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  FORMAT_DATE_YMD = 'yyyy-MM-dd';
  FORMAT_DATE_DMY = 'dd-MM-yyyy';
  FORMAT_DATE_MMYY = 'MM-yyyy';

  constructor(private backend: BackendService, private datePipe: DatePipe) {
  }

  formatDateYMD(date) {
    return this.datePipe.transform(date, this.FORMAT_DATE_YMD);
  }

  formatDateDMY(date) {
    return this.datePipe.transform(date, this.FORMAT_DATE_DMY);
  }

  formatDateMY(date) {
    return this.datePipe.transform(date, this.FORMAT_DATE_MMYY);
  }

  setSessionData(key, value) {
    sessionStorage.setItem(key, value);
  }

  getSessionData(key) {
    return sessionStorage.getItem(key);
  }

  setLocalData(key, value) {
    localStorage.setItem(key, value);
  }

  getLocalData(key) {
    return localStorage.getItem(key);
  }

  removeLocalData(key) {
    return localStorage.removeItem(key);
  }

  removeLocalDataMultiItem(listKey: Array<string>) {
    listKey.map(item => {
      this.removeLocalData(item);
    });
  }
}
