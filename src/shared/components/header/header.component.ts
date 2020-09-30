import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';


/**
 * Header component
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() navLinkClicked = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  navClicked(number) {
    this.navLinkClicked.emit(number)
  }

  ngOnDestroy() {}
}
