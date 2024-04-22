import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballDataService {

  private apiUrl = 'https://api.football-data.org/v2/';
  private apiKey = 'b15c0be9bdd84016b736ea883720c774';

  constructor(private http: HttpClient) { }

  getFootballMatches(): Observable<any> {
    const url = `${this.apiUrl}matches`;
    console.log(url);
    const headers = new HttpHeaders({ 'X-Auth-Token': this.apiKey });
    console.log(headers)
    return this.http.get(url, { headers });
  }
 }

