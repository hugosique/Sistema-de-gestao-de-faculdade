import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';

//Material
import { MatListModule } from '@angular/material/list'

@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent,
  ],
  exports: [
    HeaderComponent,
    AsideComponent,
  ],
  imports: [
    CommonModule,
    MatListModule
  ]
})
export class ComponentsModule { }
