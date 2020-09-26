import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';


/**
 * Routes within the account module for each of the pages
 */
const accountRoutes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    data: { title: 'Login' },
  }
];
@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(accountRoutes),
    SharedModule
  ]
})
export class AccountModule { }
