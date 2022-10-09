import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Models
import { IClasses } from './../../models/models.model';

// Services
import { MessagesService } from './../../services/messages.service';
import { ClassesService } from './../../services/classes.service';

//Components
import { DeleteDialogComponent } from './../../shared/components/delete-dialog/delete-dialog.component';

//Material
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  public classes!: IClasses[];
  public displayedColumns = ['name', 'semesters', 'coordinator', 'action'];

  constructor(
    private router: Router,
    private classesService: ClassesService,
    private messagesService: MessagesService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getClasses();
  }

  getClasses() {
    this.classes = this.classesService.getClasses()
  }

  editClass(id: string) {
    this.router.navigate([`disciplinas/editar/${id}`])
  }

  removeClass(id: string) {
    this.classesService.deleteClass(id)
    this.messagesService.showMessage('Disciplina removida!', true)
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
      if (result) this.removeClass(id)
    })
  }

  navigateToClassesForm() {
    this.router.navigate(['disciplinas/novo'])
  }

}
