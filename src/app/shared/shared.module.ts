import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartButtonComponent } from './start-button/start-button.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [HeaderComponent, StartButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    StartButtonComponent,
  ],
})
export class SharedModule { }
