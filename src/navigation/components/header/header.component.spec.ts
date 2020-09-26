import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { SideBarMobileComponent } from '../side-bar-mobile/side-bar-mobile.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateServiceStub } from '../../../testing/serviceMocks/translate.service.mock';
import { MockTranslatePipe } from '../../../testing/pipeMocks/page-translate.pipe.mock';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const routerStub = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, SideBarMobileComponent, MockTranslatePipe],
      imports: [FormsModule],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: TranslateService, useValue: TranslateServiceStub },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
