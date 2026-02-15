import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { StudentCrud } from './features/student-crud/student-crud';

export const routes: Routes = [
  {
    path: "",
    component: MainLayout,
    children: [
      {
        path: "student-crud",
        component: StudentCrud
      }
    ]
  }
];
