import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {ShortenUrlServiceResponse} from '../models/urlServiceModels/urlServiceModels';
import {UrlService} from '../services/url.service';

@Injectable({ providedIn: 'root' })
export class UrlResolver implements Resolve<ShortenUrlServiceResponse> {
  constructor(private service: UrlService) {}

  /**
   * Resolves a url based on the shortened url passed in the url params
   * @param route
   */
  // tslint:disable-next-line:max-line-length
  resolve(route: ActivatedRouteSnapshot): Observable<ShortenUrlServiceResponse> | Promise<ShortenUrlServiceResponse> | ShortenUrlServiceResponse {
    return this.service.redirectUrl(route.paramMap.get('shortUrl')).pipe(map((response) => {
        if (response) {
          if (response.url.originalUrl.includes('http://') || response.url.originalUrl.includes('https://')) {
            window.location.href = response.url.originalUrl;
          } else {
            window.location.href = 'http://' + response.url.originalUrl;
          }
        } else {
          return of(null);
        }
      }),
      catchError((error) => {
        console.log(`Retrieval error: ${error}`);
        return of(null);
      }));
  }
}
