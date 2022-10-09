import { DeleteDialogComponent } from './../../shared/components/delete-dialog/delete-dialog.component';
import { MessagesService } from './../../services/messages.service';
import { ICourse } from './../../models/models.model';
import { CoursesService } from '../../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses!: ICourse[];
  public displayedColumns = ['name', 'semesters', 'coordinator', 'action'];

  constructor(
    private router: Router,
    private generalService: CoursesService,
    private messagesService: MessagesService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.courses = this.generalService.getCourses()
  }
  
  editCourse(id: string) {
    this.router.navigate([`cursos/editar/${id}`])
  }

  removeCourse(id: string) {
    this.generalService.deleteCourse(id)
    this.messagesService.showMessage('Curso removido!', true)
    this.reloadComponent()
  }

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
        // Credits for --Courageous Chamois
  }

  openConfirmationModal(id: string) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '500px',
      data: {delete: false},
      disableClose: true
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.removeCourse(id)
    })
  }

  navigateToCoursesForm() {
    this.router.navigate(['cursos/novo'])
  }
  
}
