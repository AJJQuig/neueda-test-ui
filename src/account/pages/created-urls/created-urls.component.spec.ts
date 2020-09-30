import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedUrlsComponent } from './created-urls.component';
import {HeaderComponent} from '../../../shared/components/header/header.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('CreatedUrlsComponent', () => {
  let component: CreatedUrlsComponent;
  let fixture: ComponentFixture<CreatedUrlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedUrlsComponent, HeaderComponent ],
      imports: [RouterTestingModule]
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
