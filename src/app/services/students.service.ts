import { iStudent } from './../models/models.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private studentsDataService: iStudent[] = [];

  constructor() { }
  
    // Students Methods
    createStudentRecord(student: iStudent) {
      localStorage.setItem('tbStudents', JSON.stringify(student))
    }
    
    getStudent() {
      if(localStorage.getItem('tbStudents')) {
        this.studentsDataService.push(JSON.parse(String(localStorage.getItem('tbStudents'))))
  
        localStorage.clear()
      } 
  
      return this.studentsDataService
    }
  
    getStudentById(id: string) {
      return this.studentsDataService.find(student => student.id === id)
    }
  
    deleteStudent(id: string) {
      let index = this.studentsDataService.findIndex(student => student.id === id)
      this.studentsDataService.splice(index, 1)
    }
  
    updateStudent(id: string, student: iStudent) {
      let index = this.studentsDataService.findIndex(element => element.id === id)
      this.studentsDataService.splice(index, 1, student)
    }
}
