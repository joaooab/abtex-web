import { Injectable } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { RESTAURANTS } from '../mock-restaurants';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { stringify } from 'querystring';
import { AbtexAbastractService } from './abtex-abstract.service';
import { SnackBarService } from '../components/snack-bar-mensagem/snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService extends AbtexAbastractService {

  constructor(
    private httpClient: HttpClient,
    private mensagemService: SnackBarService
  ) { super(); }

  getMensagemService() {
    return this.mensagemService;
  }

  getResources(): string {
    return '/restaurant';
  }
  getHttpClient(): HttpClient {
    return this.httpClient;
  }

  getRestaurants() {
    return this.get<any[]>('');
  }

  // private heroesUrl = 'http://localhost:8080/restaurant';
  // private debugMode: boolean = false;

  // getRestaurants(): Observable<Restaurant[]> {
  //   return this.http.get<Restaurant[]>(this.heroesUrl)
  //     .pipe(
  //       catchError(this.handleError<Restaurant[]>('getRestaurants', []))
  //     );
  // }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

}
