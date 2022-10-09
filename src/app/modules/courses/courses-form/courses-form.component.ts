import { ClassesService } from './../../../services/classes.service';
import { MessagesService } from './../../../services/messages.service';
import { CoursesService } from '../../../services/courses.service';
import { ICourse, IClasses } from './../../../models/models.model';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatAutocompleteActivatedEvent, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit {
  public courseId = this.activatedRoute.snapshot.paramMap.get('id') || '';
  public courses!: ICourse[];

  public editCourse!: ICourse | undefined;

  public coursesForm!: FormGroup;
  public formSubmited: boolean = false;

  // other datas
  public classesToChoose!: IClasses[];
  public classCourseForm!: FormGroup;
  public selectedClasses: IClasses[] = [];

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private classesService: ClassesService,
    private messagesService: MessagesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createCoursesForm();
    this.createClassCourseForm();
    this.getClasses();
    
    if(this.courseId) {
      this.getCourse(this.courseId)
    }
  }
  
  createCoursesForm() {
    this.coursesForm = this.fb.group({
      id: [null],
      name: [null],
      coordinator: [null],
      semesters: [null],
      classes: this.fb.array([])
    })
  }

  createClassCourseForm() {
    this.classCourseForm = this.fb.group({
      class: [null],
      classSemester: [null],
    })
  }

  addClass() {
    if(this.classCourseForm.get('class')?.value == null ||
    typeof(this.classCourseForm.get('class')?.value) == typeof('')) {
      this.messagesService.showMessage('Preencha uma disciplina válida', true)
      return
    }

    if(this.classCourseForm.get('classSemester')?.value > this.coursesForm.get('semesters')?.value || 
    this.classCourseForm.get('classSemester')?.value == 0) {
      this.messagesService.showMessage('O semestre preenchido não existe no curso', true)
      return
    }

    this.selectedClasses.push({
      ...this.classCourseForm.get('class')?.value,
      semester: this.classCourseForm.get('classSemester')?.value
    })

    this.updateClassOnCourseForm(this.selectedClasses)

    this.classCourseForm.reset()

  }

  updateClassOnCourseForm(selectedClasses: IClasses[]) {
    const coursesForm = this.coursesForm.controls['classes'] as FormArray;

    selectedClasses.forEach((element => {
      coursesForm.push(
        this.fb.group({
          ...element
        })
      )
    }))
  }
  
  getCourse(id: string) {
    this.editCourse = this.coursesService.getCourseById(id)
    this.coursesForm.patchValue({
      ...this.editCourse,
    })
    if(this.editCourse?.classes) {
      this.updateClassOnCourseForm(this.editCourse?.classes)
      this.selectedClasses = this.coursesForm.get('classes')?.value
    }
  }
  // Get other data

  getClasses() {
    this.classesToChoose = this.classesService.getClasses()
  }

  // Form

  cancelForm() {
    this.router.navigate(['cursos'])
  }
  
  submitForm() {
    this.formSubmited = !this.coursesForm.valid
    if (!this.coursesForm.valid) return
    
    if(!this.courseId) {
      this.coursesForm.get('id')?.setValue(Math.floor(Date.now() * Math.random()).toString(36))
      const bodyCreate = this.coursesForm.getRawValue()
      
      this.coursesService.createCourse(bodyCreate)
      
      
    } else {
      const bodyUpdate = {
        id: this.courseId,
        name: this.coursesForm.get('name')?.value,
        coordinator: this.coursesForm.get('coordinator')?.value,
        semesters: this.coursesForm.get('semesters')?.value,
        classes: this.selectedClasses,
      }
      this.coursesService.updateCourse(this.courseId, bodyUpdate) 
    }
      !this.courseId ? this.messagesService.showMessage('Curso cadastrado com sucesso!', false) :
      this.messagesService.showMessage('Curso atualizado com sucesso!', false)

      this.router.navigate(['cursos'])
  }

  displayFn(subject: any) {
    return subject ? subject.className : undefined
  }
}
