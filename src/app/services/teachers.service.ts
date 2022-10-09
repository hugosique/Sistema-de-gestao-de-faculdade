import { Injectable } from '@angular/core';
import { ITeacher } from './../models/models.model';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  private teachersDataService: ITeacher[] = [];

  constructor() { }
  
    // Classes Methods
    createTeacherRecord(teacher: ITeacher) {
      localStorage.setItem('tbTeachers', JSON.stringify(teacher))
    }
    
    getTeacher() {
      if(localStorage.getItem('tbTeachers')) {
        this.teachersDataService.push(JSON.parse(String(localStorage.getItem('tbTeachers'))))
  
        localStorage.clear()
      } 
  
      return this.teachersDataService
    }
  
    getTeacherById(id: string) {
      return this.teachersDataService.find(teacher => teacher.id === id)
    }
  
    deleteTeacher(id: string) {
      let index = this.teachersDataService.findIndex(teacher => teacher.id === id)
      this.teachersDataService.splice(index, 1)
    }
  
    updateTeacher(id: string, teacher: ITeacher) {
      let index = this.teachersDataService.findIndex(element => element.id === id)
      this.teachersDataService.splice(index, 1, teacher)
    }

}
