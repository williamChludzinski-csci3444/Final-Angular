import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
import 'rxjs/add/operator/map';
//import { TeacherListComponent } from "../components/teacher-list/teacher-list.component"
//var TeacherModel = require ("../../../../final_project_rest/src/rest/model/teacherModel");

@Injectable()
export class TeacherListDataService {

  constructor(public http:Http) 
  { 
  }

  getTeachers() {
    return this.http.get('http://localhost:9016/teachers/').map( response => response.json());
  }
}
export interface Teacher {
  teacherId: string,
  name:string,
  lastname: string,
  title: string,
  age: number,
  isFullTime: boolean,
  updatedOn: Date 
}

 