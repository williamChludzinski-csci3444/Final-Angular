import { Component, OnInit } from '@angular/core';
import { TeacherListDataService } from "../../services/teacher-list-data.service";
import { Teacher } from "../../services/teacher-list-data.service"


@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  //templateUrl: '../../components/teacher-list/teacher-list.component',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  teachers: Teacher[];
  isToDisplayTeachers: boolean = false;
  constructor(private teacherListDataService:TeacherListDataService) {}

  ngOnInit() {
    //console.log('TeacherComponent ngOnInit executed');
    this.teacherListDataService.getTeachers().subscribe( (teachers) => {
      console.log(teachers);
      this.teachers = teachers;
    });
  }
 
  toggleToDisplayTeachers() {
    this.isToDisplayTeachers = !this.isToDisplayTeachers;
  }
  /*onClick()
  {
    this.toggleToDisplayTeachers();
  }
  */

}
