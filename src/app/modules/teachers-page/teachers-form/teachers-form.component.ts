import { ITeacher } from './../../../models/models.model';
import { TeachersService } from './../../../services/teachers.service';
import { Component, OnInit } from '@angular/core';
import { MessagesService } from './../../../services/messages.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IClasses } from 'src/app/models/models.model';

@Component({
  selector: 'app-teachers-form',
  templateUrl: './teachers-form.component.html',
  styleUrls: ['./teachers-form.component.scss']
})
export class TeachersFormComponent implements OnInit {
  public teacherId = this.activatedRoute.snapshot.paramMap.get('id') || '';
  public teachers!: ITeacher[];

  public editTeacher!: ITeacher | undefined;

  public teachersForm!: FormGroup;
  public formSubmited: boolean = false;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private teachersService: TeachersService,
    private messagesService: MessagesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createTeachersForm();

    if(this.teacherId) {
      this.getTeacher(this.teacherId)
    }
  }

  createTeachersForm() {
    this.teachersForm = this.fb.group({
      id: [null],
      teacherName: [null],
      birthDate: [null],
      remuneration: [null],
    })
  }

  getTeacher(id: string) {
    this.editTeacher = this.teachersService.getTeacherById(id)
    this.teachersForm.patchValue({
      ...this.editTeacher,
    })
  }

  cancelForm() {
    this.router.navigate(['professores'])
  }

  submitForm() {
    this.formSubmited = !this.teachersForm.valid
    if (!this.teachersForm.valid) return

    if(!this.teacherId) {
      this.teachersForm.get('id')?.setValue(Math.floor(Date.now() * Math.random()).toString(36))
      const bodyCreate = this.teachersForm.getRawValue()

      this.teachersService.createTeacherRecord(bodyCreate)
    } else {
      const bodyUpdate = {
        id: this.teacherId,
        teacherName: this.teachersForm.get('teacherName')?.value,
        birthDate: this.teachersForm.get('birthDate')?.value,
        remuneration: this.teachersForm.get('remuneration')?.value,
      }

      this.teachersService.updateTeacher(this.teacherId, bodyUpdate)
    }

    !this.teacherId ? this.messagesService.showMessage('Professor cadastrado com sucesso!', false) :
    this.messagesService.showMessage('Professor atualizado com sucesso!', false)
    
    this.router.navigate(['professores'])
  }
}
