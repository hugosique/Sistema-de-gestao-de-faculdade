import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    ComponentsModule,
  ]
})
export class SharedModule { }
