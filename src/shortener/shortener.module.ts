import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenerPageComponent } from './pages/shortener-page/shortener-page.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { ShortenerComponent } from './components/shortener/shortener.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RedirectComponent } from './pages/redirect/redirect.component';
import { TestEndpointComponent } from './pages/test-endpoint/test-endpoint.component';
import {UrlResolver} from '../core/resolvers/url.resolver';


/**
 * Routes within the shortener module for each of the pages
 */
const shortenerRoutes: Routes = [
  {
    path: '',
    component: ShortenerPageComponent,
    data: { title: 'Shorten Url' },
  },
  {
    path: ':shortUrl',
    component: RedirectComponent,
    resolve: {
      url: UrlResolver,
    },
    data: { title: 'Redirect Page' },

  },
  {
    path: 'mock/test-endpoint',
    component: TestEndpointComponent,
    data: { title: 'Test endpoint' }
  },
];

/**
 * Module for all shortener related components and pages
 */
@NgModule({
  declarations: [ShortenerPageComponent, ShortenerComponent, RedirectComponent, TestEndpointComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(shortenerRoutes),
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ShortenerModule { }
