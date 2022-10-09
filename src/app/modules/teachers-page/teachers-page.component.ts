import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Models
import { ITeacher } from './../../models/models.model';

// Services
import { MessagesService } from './../../services/messages.service';
import { TeachersService } from './../../services/teachers.service';

//Components
import { DeleteDialogComponent } from './../../shared/components/delete-dialog/delete-dialog.component';

//Material
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-teachers-page',
  templateUrl: './teachers-page.component.html',
  styleUrls: ['./teachers-page.component.scss']
})
export class TeachersPageComponent implements OnInit {
  public teachers!: ITeacher[];
  public displayedColumns = ['name', 'semesters', 'coordinator', 'action'];

  constructor(
    private router: Router,
    private teachersService: TeachersService,
    private messagesService: MessagesService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getTeacher();
  }

  getTeacher() {
    this.teachers = this.teachersService.getTeacher()
  }

  editTeacher(id: string) {
    this.router.navigate([`professores/editar/${id}`])
  }

  removeTeacher(id: string) {
    this.teachersService.deleteTeacher(id)
    this.messagesService.showMessage('Professor removido!', true)
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
      if (result) this.removeTeacher(id)
    })
  }

  navigateToTeachersForm() {
    this.router.navigate(['professores/novo'])
  }
}
