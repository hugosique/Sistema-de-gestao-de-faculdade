import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Models
import { iStudent } from './../../models/models.model';

// Services
import { MessagesService } from './../../services/messages.service';

//Components
import { DeleteDialogComponent } from './../../shared/components/delete-dialog/delete-dialog.component';

//Material
import { MatDialog } from '@angular/material/dialog';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  public students!: iStudent[];
  public displayedColumns = ['name', 'semesters', 'coordinator', 'action'];

  constructor(
    private router: Router,
    private studentsService: StudentsService,
    private messagesService: MessagesService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent() {
    this.students = this.studentsService.getStudent()
  }

  editStudent(id: string) {
    this.router.navigate([`alunos/editar/${id}`])
  }

  removeStudent(id: string) {
    this.studentsService.deleteStudent(id)
    this.messagesService.showMessage('Aluno removido!', true)
    this.reloadComponent()
  }

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
  }

  openConfirmationModal(id: string) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '500px',
      data: {delete: false},
      disableClose: true
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.removeStudent(id)
    })
  }

  navigateToStudentsForm() {
    this.router.navigate(['alunos/novo'])
  }
}
