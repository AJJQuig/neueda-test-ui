import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {ShortenUrlServiceResponse} from '../models/urlServiceModels/urlServiceModels';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private httpClient: HttpClient) { }


  shortenUrl(url: string): Observable<ShortenUrlServiceResponse> {
    return this.httpClient.post<ShortenUrlServiceResponse>(`${environment.apiBaseUrl}/url/shorten`, this.createFormData(url)).pipe(
      catchError((error) => {
        return of(error);
      }),
      map((response) => response.body)
    );
  }

  private createFormData(url: string): FormData {
    const formData = new FormData();
    formData.append('url', JSON.stringify(url));
    return formData;
  }

  public getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
  }
}
