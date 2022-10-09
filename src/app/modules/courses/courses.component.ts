import { ICourse } from './../../models/models.model';
import { GeneralService } from './../../services/general.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses!: ICourse[];
  public displayedColumns = ['name', 'semesters', 'coordinator', 'action'];

  constructor(
    private router: Router,
    private generalService: GeneralService,
  ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.courses = this.generalService.getCourses()
  }
  
  editCourse(id: string) {
    this.router.navigate([`cursos/editar/${id}`])
  }

  removeCourse(id: string) {
    this.generalService.deleteCourse(id)
  }

  navigateToCoursesForm() {
    this.router.navigate(['cursos/novo'])
  }
  
}
