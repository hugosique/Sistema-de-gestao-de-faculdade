import { ICourse } from './../models/models.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private coursesDataService: ICourse[] = [];

  constructor() { }

  createCourse(course: ICourse) {
    localStorage.setItem('tbCourses', JSON.stringify(course))
  }

  getCourses() {
    if(localStorage.getItem('tbCourses')) {
      this.coursesDataService.push(JSON.parse(String(localStorage.getItem('tbCourses'))))
    } 

    return this.coursesDataService
  }
}
