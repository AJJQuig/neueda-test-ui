import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenerPageComponent } from './pages/shortener-page/shortener-page.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { ShortenerComponent } from './components/shortener/shortener.component';
import {ReactiveFormsModule} from '@angular/forms';


/**
 * Routes within the shortener module for each of the pages
 */
const shortenerRoutes: Routes = [
  {
    path: '',
    component: ShortenerPageComponent,
    data: { title: 'Shorten Url' },
  }
];

/**
 * Module for all shortener related components and pages
 */
@NgModule({
  declarations: [ShortenerPageComponent, ShortenerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(shortenerRoutes),
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ShortenerModule { }
