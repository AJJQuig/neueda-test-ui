import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {ShortenUrlServiceResponse, UrlObject} from '../models/urlServiceModels/urlServiceModels';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private httpClient: HttpClient) { }


  getUrls(): Observable<ShortenUrlServiceResponse[]> {
    return this.httpClient.get<ShortenUrlServiceResponse[]>(`${environment.apiBaseUrl}/urls`).pipe(
      catchError((error) => {
        return of(error);
      }),
      map((response) => (response))
    );
  }
  shortenUrl(url: string): Observable<ShortenUrlServiceResponse> {
    return this.httpClient.post<ShortenUrlServiceResponse>(`${environment.apiBaseUrl}/urls/shorten`, this.createFormDataShorten(url)).pipe(
      catchError((error) => {
        return of(error);
      }),
      map((response) => ({
        shortenedUrl: response.shortenedUrl,
        url: {
          originalUrl: response.url.originalUrl,
          clicks: response.url.clicks,
        }
      }))
    );
  }

  redirectUrl(shortUrl: string): Observable<ShortenUrlServiceResponse> {
    return this.httpClient.get<ShortenUrlServiceResponse>(`${environment.apiBaseUrl}/redirect/${shortUrl}`).pipe(
      catchError((error) => {
        return of(error);
      }),
      map((response) => (response))
    );
  }

  private createFormDataShorten(url: string): FormData {
    const formData = new FormData();
    formData.append('url', url);
    return formData;
  }
}
