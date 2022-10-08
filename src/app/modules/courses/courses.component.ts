import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses!: any[];
  public displayedColumns = ['name', 'idade'];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.courses = [
      {
        name: 'hugo',
        idade: 18,
      },
      {
        name: 'Liviao',
        idade: 18,
      },
    ]
  }

  navigateToCoursesForm() {
    this.router.navigate(['cursos/novo'])
  }
  
}
