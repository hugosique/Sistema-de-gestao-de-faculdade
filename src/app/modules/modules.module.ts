import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

//Components
import { CoursesComponent } from './courses/courses.component';
import { ClassesComponent } from './classes/classes.component';
import { TeachersPageComponent } from './teachers-page/teachers-page.component';
import { StudentsComponent } from './students/students.component';

//Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CoursesFormComponent } from './courses/courses-form/courses-form.component';

@NgModule({
  declarations: [
    CoursesComponent,
    ClassesComponent,
    TeachersPageComponent,
    StudentsComponent,
    CoursesFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    ReactiveFormsModule
  ]
})
export class ModulesModule { }
