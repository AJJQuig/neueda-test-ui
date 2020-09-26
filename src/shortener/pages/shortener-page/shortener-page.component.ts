import { Component, OnInit } from '@angular/core';
import {UrlService} from '../../../core/services/url.service';
import {ShortenUrlServiceResponse} from '../../../core/models/urlServiceModels/urlServiceModels';

@Component({
  selector: 'app-shortener-page',
  templateUrl: './shortener-page.component.html',
  styleUrls: ['./shortener-page.component.scss']
})
export class ShortenerPageComponent implements OnInit {

  shortenedUrl: string;
  constructor(private urlService: UrlService) { }

  ngOnInit(): void {
  }

  shortenUrl(urlForm) {
    this.urlService.shortenUrl(urlForm.controls.url.value).subscribe((shortenUrlServiceResponse) => {
        this.shortenedUrl = shortenUrlServiceResponse.shortenedUrl;
        console.log(this.shortenedUrl);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
