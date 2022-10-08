import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';

//Material
import { MatListModule } from '@angular/material/list'
import { AppRoutingModule } from 'src/app/app-routing.module';

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
    MatListModule,
    AppRoutingModule,
  ]
})
export class ComponentsModule { }
