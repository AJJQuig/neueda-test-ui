import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PolicyServiceStub} from './serviceMocks/url.service.mock';


/**
 * Module for all test related components/stubs
 */
@NgModule({
  providers: [PolicyServiceStub],
  imports: [
    CommonModule
  ]
})
export class TestingModule { }
