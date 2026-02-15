import { Component, inject, input, output } from "@angular/core";
import { IStudent, StudentService } from "../student.service";
import { TableModule } from "primeng/table";
import { Button } from "primeng/button";

@Component({
  selector: 'app-student-list',
  templateUrl: "./student-list.html",
  imports: [TableModule, Button]
})

export class StudentList {
  private studentService = inject(StudentService);
  students = input.required<IStudent[]>();
  updateStudent = output<IStudent>();

  removeStudent(id: string) {
    this.studentService.deleteStudent(id);
  }
}