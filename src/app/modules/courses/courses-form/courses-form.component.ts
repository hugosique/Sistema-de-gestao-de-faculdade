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
  }

  createCoursesForm() {
    this.coursesForm = this.fb.group({
      id: [null],
      name: [null],
      semesters: [null],
    })
  }

  submitForm() {
    this.formSubmited = !this.coursesForm.valid

    if (!this.coursesForm.valid) return

    this.coursesForm.get('id')?.setValue(Math.floor(Date.now() * Math.random()).toString(36))

    const body = this.coursesForm.getRawValue()

    this.generalService.createCourse(body)

    this.router.navigate(['cursos'])

  }
}
