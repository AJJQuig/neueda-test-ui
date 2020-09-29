import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({ selector: 'app-host-for-test', template: '' })
export class HostComponent {
  params: any = {};
}

export function createHostComponent(template: string, params: any = {}): ComponentFixture<HostComponent> {
  TestBed.overrideComponent(HostComponent, { set: { template } });
  const fixture = TestBed.createComponent(HostComponent);


  fixture.detectChanges();

  fixture.componentInstance.params = params;


  return fixture as ComponentFixture<HostComponent>;
}
