import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { CreatedUrlsComponent } from './pages/created-urls/created-urls.component';


/**
 * Routes within the account module for each of the pages
 */
const accountRoutes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    data: { title: 'Login' },
  },
  {
    path: 'create',
    component: CreateAccountComponent,
    data: { title: 'Create Account' },
  },
  {
    path: 'urls',
    component: CreatedUrlsComponent,
    data: { title: 'Created Urls' },
  }
];
@NgModule({
  declarations: [LoginPageComponent, CreateAccountComponent, CreatedUrlsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(accountRoutes),
    SharedModule
  ]
})
export class AccountModule { }
