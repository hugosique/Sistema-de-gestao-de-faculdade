import { HomePageComponent } from './modules/home-page/home-page.component';
import { StudentsFormComponent } from './modules/students/students-form/students-form.component';
import { TeachersFormComponent } from './modules/teachers-page/teachers-form/teachers-form.component';
import { ClassesFormComponent } from './modules/classes/classes-form/classes-form.component';
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
    path: '',
    component: HomePageComponent,
  },
  // Courses
  {
    path: 'cursos',
    component: CoursesComponent
  },
  {
    path: 'cursos/novo',
    component: CoursesFormComponent
  },
  {
    path: 'cursos/editar/:id',
    component: CoursesFormComponent
  },
  // Classes
  {
    path: 'disciplinas',
    component: ClassesComponent
  },
  {
    path: 'disciplinas/novo',
    component: ClassesFormComponent
  },
  {
    path: 'disciplinas/editar/:id',
    component: ClassesFormComponent
  },
  // Teachers
  {
    path: 'professores',
    component: TeachersPageComponent
  },
  {
    path: 'professores/novo',
    component: TeachersFormComponent
  },
  {
    path: 'professores/editar/:id',
    component: TeachersFormComponent
  },
  // Students
  {
    path: 'alunos',
    component: StudentsComponent
  },
  {
    path: 'alunos/novo',
    component: StudentsFormComponent
  },
  {
    path: 'alunos/editar/:id',
    component: StudentsFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
