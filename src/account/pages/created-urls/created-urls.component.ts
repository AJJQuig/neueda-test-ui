import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-created-urls',
  templateUrl: './created-urls.component.html',
  styleUrls: ['./created-urls.component.scss']
})
export class CreatedUrlsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
