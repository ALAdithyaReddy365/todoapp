import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listtask',
  templateUrl: './listtask.component.html',
  styleUrls: ['./listtask.component.css']
})
export class ListtaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users = [
    {id:101,name:"Adithya",email:"adithyaavuthu@gmail.com",status:"PENDING"},
   {id:1022,name:"Reddy",email:"reddy@gmal.com",status:"compleated"}
  ]
  deleteUser(){
    alert("Successfully Deleted");
  }


}
