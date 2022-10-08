import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit {

  public courses!: any[];
  public coursesForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
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
}
