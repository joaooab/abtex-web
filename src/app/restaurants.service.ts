import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { RESTAURANTS } from './mock-restaurants';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(  private http: HttpClient) { }

  private heroesUrl = 'api/heroes';
  private debugMode: boolean = false;

  getRestaurants(): Observable<Restaurant[]> {
    if(this.debugMode) {
      return of(RESTAURANTS);
    } else {
      return this.http.get<Restaurant[]>(this.heroesUrl)
    }
  }

}
