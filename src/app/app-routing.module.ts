import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { CoursesComponent } from './modules/courses/courses.component';
import { ClassesComponent } from './modules/classes/classes.component';
import { TeachersPageComponent } from './modules/teachers-page/teachers-page.component';
import { StudentsComponent } from './modules/students/students.component';
import { CoursesFormComponent } from './modules/courses/courses-form/courses-form.component';


const routes: Routes = [
  {
    path: 'cursos',
    component: CoursesComponent
  },
  {
    path: 'cursos/novo',
    component: CoursesFormComponent
  },
  {
    path: 'disciplinas',
    component: ClassesComponent
  },
  {
    path: 'professores',
    component: TeachersPageComponent
  },
  {
    path: 'alunos',
    component: StudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
