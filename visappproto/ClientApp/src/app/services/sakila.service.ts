import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actor } from '../models/sakila';
import { MasterKeyValue } from '../models/masterKeyValue';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SakilaService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getActor(): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.baseUrl + 'Actor');
  }
}
