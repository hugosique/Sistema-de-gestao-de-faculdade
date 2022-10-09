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

      localStorage.clear()
    } 

    return this.coursesDataService
  }

  getCourseById(id: string) {
    return this.coursesDataService.find(course => course.id === id)
  }

  deleteCourse(id: string) {
    let index = this.coursesDataService.findIndex(course => course.id === id)
    this.coursesDataService.splice(index, 1)
  }

  updateCourse(id: string, course: ICourse) {
    let index = this.coursesDataService.findIndex(element => element.id === id)
    this.coursesDataService.splice(index, 1, course)
  }
}
