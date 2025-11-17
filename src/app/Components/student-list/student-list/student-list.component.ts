import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/Services/student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{
  students: any[] = [];
  constructor(
    private studentService: StudentServiceService
  ){

  }
  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(){
    this.studentService.getAllStudent().subscribe({
      next:(res: any) => {
        this.students = res;
      }
    })
  }
}
