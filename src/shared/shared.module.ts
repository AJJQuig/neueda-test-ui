import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import {HeaderComponent} from './components/header/header.component';
import { ClipboardDirective } from './directives/clipboard.directive';



@NgModule({
  declarations: [CardComponent, HeaderComponent, ClipboardDirective],
  imports: [
    CommonModule
  ],
    exports: [CardComponent, HeaderComponent, ClipboardDirective]
})
export class SharedModule { }
