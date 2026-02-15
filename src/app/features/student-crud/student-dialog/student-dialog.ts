import { Component, inject, input, output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StudentService } from "../student.service";
import { InputText } from "primeng/inputtext";
import { InputNumber } from "primeng/inputnumber";
import { Button } from "primeng/button";
import { Dialog } from "primeng/dialog";

@Component({
  selector: "app-student-dialog",
  templateUrl: "./student-dialog.html",
  imports: [FormsModule, InputText, InputNumber, Button, Dialog]
})

export class StudentDialog {
  dialogVisible = input.required<boolean>();
  setDialogVisible = output<boolean>();

  name = signal('');
  score = signal(0);
  science = signal('');

  private studentService = inject(StudentService);

  addStudent() {
    this.studentService.addStudent({
      id: Date.now().toString(),
      name: this.name(),
      score: this.score(),
      science: this.science()
    })
  }
}