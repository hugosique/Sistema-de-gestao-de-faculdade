import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';

//Material
import { MatListModule } from '@angular/material/list'
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent,
    DeleteDialogComponent,
  ],
  exports: [
    HeaderComponent,
    AsideComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
  ]
})
export class ComponentsModule { }
