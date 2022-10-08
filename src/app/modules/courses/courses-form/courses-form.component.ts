import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit {
  public courseId = this.activatedRoute.snapshot.paramMap.get('id') || '';

  public courses!: any[];
  public coursesForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.createCoursesForm();
  }

  createCoursesForm() {
    this.coursesForm = this.fb.group({
      id: [null],
      name: [null],
      semesters: [null],
      classes: this.fb.array([]),
    })
  }

  teste() {
    console.log(this.coursesForm.value.name)
  }
}
