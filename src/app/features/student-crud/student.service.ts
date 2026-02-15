import { Injectable, signal } from "@angular/core";

export interface IStudent {
  id: string;
  name: string;
  score: number;
  science: string
}

@Injectable({ providedIn: "root" })
export class StudentService {
  private students = signal<IStudent[]>([
    {
      id: '123456',
      name: 'John Doe',
      science: 'Computer Science',
      score: 75
    },
    {
      id: '1234567',
      name: 'Will Smith',
      science: 'Biology',
      score: 90
    }
  ]);

  allStudents = this.students.asReadonly();

  addStudent(newStudent: IStudent) {
    this.students.update((students) => {
      return [ ...students, newStudent ];
    })
  }

  updateStudent(studentData: IStudent) {
    this.students.update((students => {
      const updateStudents = students.map(s => {
        if (s.id === studentData.id) return studentData;
        return s;
      })
      return [ ...updateStudents ]
    }))
  }

  deleteStudent(id: string) {
    this.students.update((students) => {
      return [ ...students.filter(s => s.id !== id) ];
    })
  }
}