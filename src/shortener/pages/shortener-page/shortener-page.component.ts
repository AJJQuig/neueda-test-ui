import {Component, OnDestroy, OnInit} from '@angular/core';
import {UrlService} from '../../../core/services/url.service';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-shortener-page',
  templateUrl: './shortener-page.component.html',
  styleUrls: ['./shortener-page.component.scss']
})
export class ShortenerPageComponent implements OnInit, OnDestroy {

  shortenedUrl: string;
  urlSizeDifference: number
  private destroy$ = new Subject();

  constructor(private urlService: UrlService, private router: Router) {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  shortenUrl(urlForm) {
    this.urlService.shortenUrl(urlForm.controls.url.value).pipe(takeUntil(this.destroy$)).subscribe((shortenUrlServiceResponse) => {
        this.shortenedUrl = shortenUrlServiceResponse.shortenedUrl;
        this.urlSizeDifference = shortenUrlServiceResponse.url.originalUrl.length - shortenUrlServiceResponse.shortenedUrl.length;
        console.log(this.shortenedUrl);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  navigate(number) {
    switch (number) {
      case 0:
        this.router.navigateByUrl('');
        break;
      case 1:
        this.router.navigateByUrl('/account/urls');
        break;
    }
  }
}
