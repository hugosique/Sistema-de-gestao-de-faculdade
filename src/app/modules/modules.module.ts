import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

//Components
import { CoursesComponent } from './courses/courses.component';
import { ClassesComponent } from './classes/classes.component';
import { TeachersPageComponent } from './teachers-page/teachers-page.component';
import { StudentsComponent } from './students/students.component';
import { CoursesFormComponent } from './courses/courses-form/courses-form.component';
import { ClassesFormComponent } from './classes/classes-form/classes-form.component';
import { TeachersFormComponent } from './teachers-page/teachers-form/teachers-form.component';
import { StudentsFormComponent } from './students/students-form/students-form.component';

//Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    CoursesComponent,
    ClassesComponent,
    TeachersPageComponent,
    StudentsComponent,
    CoursesFormComponent,
    ClassesFormComponent,
    TeachersFormComponent,
    StudentsFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatTooltipModule
  ]
})
export class ModulesModule { }
