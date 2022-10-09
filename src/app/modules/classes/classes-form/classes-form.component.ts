import { ClassesService } from './../../../services/classes.service';
import { Component, OnInit } from '@angular/core';
import { MessagesService } from './../../../services/messages.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IClasses } from 'src/app/models/models.model';

@Component({
  selector: 'app-classes-form',
  templateUrl: './classes-form.component.html',
  styleUrls: ['./classes-form.component.scss']
})
export class ClassesFormComponent implements OnInit {
  public classId = this.activatedRoute.snapshot.paramMap.get('id') || '';
  public classes!: IClasses[];

  public editClass!: IClasses | undefined;

  public classesForm!: FormGroup;
  public formSubmited: boolean = false;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private classesService: ClassesService,
    private messagesService: MessagesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createClassesForm();

    if(this.classId) {
      this.getClass(this.classId)
    }
  }

  createClassesForm() {
    this.classesForm = this.fb.group({
      id: [null],
      className: [null],
      teacher: [null],
      description: [null],
      workload: [null],
    })
  }

  getClass(id: string) {
    this.editClass = this.classesService.getClassById(id)
    this.classesForm.patchValue({
      ...this.editClass,
    })
  }

  cancelForm() {
    this.router.navigate(['disciplinas'])
  }

  submitForm() {
    this.formSubmited = !this.classesForm.valid
    if (!this.classesForm.valid) return

    if(!this.classId) {
      this.classesForm.get('id')?.setValue(Math.floor(Date.now() * Math.random()).toString(36))
      const bodyCreate = this.classesForm.getRawValue()

      this.classesService.createClass(bodyCreate)
      this.messagesService.showMessage('Disciplina cadastrada com sucesso!', false)

    } else {
      const bodyUpdate = {
        id: this.classId,
        className: this.classesForm.get('className')?.value,
        teacher: this.classesForm.get('teacher')?.value,
        description: this.classesForm.get('description')?.value,
        workload: this.classesForm.get('workload')?.value,
      }

      this.classesService.updateClass(this.classId, bodyUpdate)
    }
    
    this.router.navigate(['disciplinas'])
  }
}
