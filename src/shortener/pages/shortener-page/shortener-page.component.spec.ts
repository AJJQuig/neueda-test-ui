import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenerPageComponent } from './shortener-page.component';
import {HeaderComponent} from '../../../shared/components/header/header.component';
import {UrlService} from '../../../core/services/url.service';
import {UrlServiceStub} from '../../../testing/serviceMocks/url.service.mock';
import {ShortenerComponent} from '../../components/shortener/shortener.component';
import {CardComponent} from '../../../shared/components/card/card.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {ClipboardDirective} from '../../../shared/directives/clipboard.directive';

describe('ShortenerPageComponent', () => {
  let component: ShortenerPageComponent;
  let fixture: ComponentFixture<ShortenerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortenerPageComponent, HeaderComponent, ShortenerComponent, CardComponent, ClipboardDirective],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [{provide: UrlService, useValue: UrlServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
