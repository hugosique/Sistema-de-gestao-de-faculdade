import { Injectable } from '@angular/core';
import { IClasses } from '../models/models.model';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  private classesDataService: IClasses[] = [];

  constructor() { }
  
    // Classes Methods
    createClass(classes: IClasses) {
      localStorage.setItem('tbClasses', JSON.stringify(classes))
    }
    
    getClasses() {
      if(localStorage.getItem('tbClasses')) {
        this.classesDataService.push(JSON.parse(String(localStorage.getItem('tbClasses'))))
  
        localStorage.clear()
      } 
  
      return this.classesDataService
    }
  
    getClassById(id: string) {
      return this.classesDataService.find(classes => classes.id === id)
    }
  
    deleteClass(id: string) {
      let index = this.classesDataService.findIndex(classes => classes.id === id)
      this.classesDataService.splice(index, 1)
    }
  
    updateClass(id: string, classes: IClasses) {
      let index = this.classesDataService.findIndex(element => element.id === id)
      this.classesDataService.splice(index, 1, classes)
    }

}
