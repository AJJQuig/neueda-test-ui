import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEndpointComponent } from './test-endpoint.component';
import {HeaderComponent} from '../../../shared/components/header/header.component';

describe('TestEndpointComponent', () => {
  let component: TestEndpointComponent;
  let fixture: ComponentFixture<TestEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEndpointComponent, HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
