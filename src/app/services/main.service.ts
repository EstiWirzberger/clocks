import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimeObject } from '../time-object';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(public http: HttpClient) {}
  httpGet(): Observable<string> {
    return this.http.get<string>('assets/jsonFiles/world-clock.json');
  }
  listdifferences = [['Israel', 0]];
}
