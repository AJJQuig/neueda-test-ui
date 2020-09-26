import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenerPageComponent } from './shortener-page.component';

describe('ShortenerPageComponent', () => {
  let component: ShortenerPageComponent;
  let fixture: ComponentFixture<ShortenerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortenerPageComponent ]
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