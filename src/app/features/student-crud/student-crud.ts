import { Component, inject, signal } from '@angular/core';
import { StudentList } from "./student-list/student-list";
import { IStudent, StudentService } from './student.service';
import { RouterLink } from "@angular/router";
import { StudentDialog } from './student-dialog/student-dialog';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-student-crud',
  imports: [StudentDialog, StudentList, RouterLink, Button],
  templateUrl: './student-crud.html',
})

export class StudentCrud {
  private studentService = inject(StudentService);
  students = this.studentService.allStudents;
  dialogVisible = signal(false);

  updateStudent(student: IStudent) {
    this.dialogVisible.set(true);
    this.studentService.updateStudent(student)
  }

  dialo() {
    console.log(1212);
    
  }
}
