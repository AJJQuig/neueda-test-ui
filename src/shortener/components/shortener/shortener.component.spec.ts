import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { ShortenerComponent } from './shortener.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CardComponent} from '../../../shared/components/card/card.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('ShortenerComponent', () => {
  let component: ShortenerComponent;
  let fixture: ComponentFixture<ShortenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortenerComponent, CardComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the shortenUrl method when the submit button is clicked', fakeAsync(() => {
    const spy = jest.spyOn(component, 'shortenUrl');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(spy).toHaveBeenCalled();
  }));

  it('should not emit if the form is not valid', fakeAsync(() => {
    const spy = jest.spyOn(component.shorten, 'emit');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(spy).not.toHaveBeenCalled();
  }));

  it('should emit if the form is valid', fakeAsync(() => {
    const spy = jest.spyOn(component.shorten, 'emit');
    const button = fixture.debugElement.nativeElement.querySelector('button');

    const urlInput = fixture.debugElement.query(By.css('#shortener-input'));
    urlInput.nativeElement.value = 'http://google.com';
    button.click();
    tick();
    expect(spy).not.toHaveBeenCalled();
  }));
});
