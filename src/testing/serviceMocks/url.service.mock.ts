import { of } from 'rxjs';

/**
 * Stub class for the URL service, for use in testing components
 */
export const UrlServiceStub = {
  shortenUrl(url: string): any {
    return of({});
  },

  redirectUrl(shortUrl: string): any {
    return of({});
  },
};
