import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  UserList:any;
  constructor(private http:HttpClient) { }

  GetUserList(){
    return this.http.get('https://api.github.com/users')

  }

  FacultyList:any;
  CourseList:any;
}
