import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UrlService} from '../../../core/services/url.service';
import {ShortenUrlServiceResponse} from '../../../core/models/urlServiceModels/urlServiceModels';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-created-urls',
  templateUrl: './created-urls.component.html',
  styleUrls: ['./created-urls.component.scss']
})
export class CreatedUrlsComponent implements OnInit, OnDestroy {

  urls: ShortenUrlServiceResponse[];
  loading = true;
  private destroy$ = new Subject();

  constructor(private router: Router, private urlService: UrlService) { }

  ngOnInit(): void {
    this.urlService.getUrls().pipe(takeUntil(this.destroy$)).subscribe( (response) => {
      this.urls = response;
      this.loading = false;
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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
