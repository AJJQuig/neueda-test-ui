import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedUrlsComponent } from './created-urls.component';
import {HeaderComponent} from '../../../shared/components/header/header.component';
import {RouterTestingModule} from '@angular/router/testing';
import {UrlService} from '../../../core/services/url.service';
import {UrlServiceStub} from '../../../testing/serviceMocks/url.service.mock';

describe('CreatedUrlsComponent', () => {
  let component: CreatedUrlsComponent;
  let fixture: ComponentFixture<CreatedUrlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedUrlsComponent, HeaderComponent],
      imports: [RouterTestingModule],
      providers: [{provide: UrlService, useValue: UrlServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedUrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
