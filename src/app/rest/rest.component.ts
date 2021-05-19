import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService} from '../data.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
Users:any;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.GetUserList().subscribe(list=>{
      this.Users=list});
  }

}
