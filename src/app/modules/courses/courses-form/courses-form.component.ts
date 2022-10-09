import { GeneralService } from './../../../services/general.service';
import { ICourse } from './../../../models/models.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private generalService: GeneralService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createCoursesForm();

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
    })
  }

  getCourse(id: string) {
    this.editCourse = this.generalService.getCourseById(id)
    this.coursesForm.patchValue({
      ...this.editCourse,
    })
  }

  cancelForm() {
    this.router.navigate(['cursos'])
  }

  submitForm() {
    this.formSubmited = !this.coursesForm.valid
    if (!this.coursesForm.valid) return

    if(!this.courseId) {
      this.coursesForm.get('id')?.setValue(Math.floor(Date.now() * Math.random()).toString(36))
      const bodyCreate = this.coursesForm.getRawValue()

      this.generalService.createCourse(bodyCreate)

    } else {
      const bodyUpdate = {
        id: this.courseId,
        name: this.coursesForm.get('name')?.value,
        coordinator: this.coursesForm.get('coordinator')?.value,
        semesters: this.coursesForm.get('semesters')?.value,
      }

      this.generalService.updateCourse(this.courseId, bodyUpdate)
    }
    
    this.router.navigate(['cursos'])
  }
}
