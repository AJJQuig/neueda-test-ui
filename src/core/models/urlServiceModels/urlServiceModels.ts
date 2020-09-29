export interface ShortenUrlServiceResponse {
  shortenedUrl: string;
  url: UrlObject;
}

export interface UrlObject {
  originalUrl: string;
  clicks: number;
}
