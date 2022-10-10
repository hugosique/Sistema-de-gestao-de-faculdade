import { ICourse } from './../../models/models.model';
import { CoursesService } from './../../services/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public courses: ICourse[] = []

  constructor(
    private coursesService: CoursesService,
  ) { }

  ngOnInit(): void {
    console.log(this.courses)
  }

  getCourses() {
    this.courses = this.coursesService.getCourses()
  }

}
