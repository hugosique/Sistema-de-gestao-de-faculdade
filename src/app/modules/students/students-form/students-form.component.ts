import { CoursesService } from './../../../services/courses.service';
import { StudentsService } from './../../../services/students.service';
import { IClasses } from 'src/app/models/models.model';
import { ITeacher, iStudent, ICourse } from './../../../models/models.model';
import { TeachersService } from './../../../services/teachers.service';
import { Component, OnInit } from '@angular/core';
import { MessagesService } from './../../../services/messages.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.scss']
})
export class StudentsFormComponent implements OnInit {
  public studentId = this.activatedRoute.snapshot.paramMap.get('id') || '';
  public students!: iStudent[];

  public editStudent!: iStudent | undefined;

  public studentsForm!: FormGroup;
  public formSubmited: boolean = false;

  // other datas
  public coursesToChoose!: ICourse[];
  public courseStudentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private studentsService: StudentsService,
    private coursesService: CoursesService,
    private messagesService: MessagesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createStudentsForm()
    this.createCoursesStudentForm()
    this.getCourses()

    if(this.studentId) {
      this.getStudent(this.studentId)
    }
  }

  createStudentsForm() {
    this.studentsForm = this.fb.group({
      id: [null],
      studentName: [null],
      birthDate: [null],
      registration: [null],
      currentSemester: [null],
      course: [null],
    })
  }

  getStudent(id: string) {
    this.editStudent = this.studentsService.getStudentById(id)
    this.studentsForm.patchValue({
      ...this.editStudent,
    })
  }

  cancelForm() {
    this.router.navigate(['alunos'])
  }

  submitForm() {
    if(this.courseStudentForm.get('courseData')?.value == null ||
    typeof(this.courseStudentForm.get('courseData')?.value) == typeof('')) {

      this.messagesService.showMessage('Preencha um curso da listagem', true)
      return
    }

    this.studentsForm.get('course')?.
    setValue(this.courseStudentForm.get('courseData')?.value)

    this.formSubmited = !this.studentsForm.valid
    if (!this.studentsForm.valid) return

    if(!this.studentId) {
      this.studentsForm.get('id')?.setValue(Math.floor(Date.now() * Math.random()).toString(36))
      const bodyCreate = this.studentsForm.getRawValue()

      this.studentsService.createStudentRecord(bodyCreate)
    } else {
      const bodyUpdate = {
        id: this.studentId,
        studentName: this.studentsForm.get('studentName')?.value,
        birthDate: this.studentsForm.get('birthDate')?.value,
        registration: this.studentsForm.get('registration')?.value,
        currentSemester: this.studentsForm.get('currentSemester')?.value,
        classGrades: this.studentsForm.get('classGrades')?.value,
      }

      this.studentsService.updateStudent(this.studentId, bodyUpdate)
    }

    !this.studentId ? this.messagesService.showMessage('Aluno cadastrado com sucesso!', false) :
    this.messagesService.showMessage('Aluno atualizado com sucesso!', false)
    
    this.router.navigate(['alunos'])
  }

  getCourses() {
    this.coursesToChoose = this.coursesService.getCourses()
  }

  displayFn(subject: any) {
    return subject ? subject.name : undefined
  }

  createCoursesStudentForm() {
    this.courseStudentForm = this.fb.group({
      courseData: [null],
    })
  }
}
