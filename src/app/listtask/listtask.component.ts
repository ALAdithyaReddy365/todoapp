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
  tasks=[
    {id:1,name:"Install Java",status:"COMPLETED"},
    {id:2,name:"Install NodeJS",status:"PENDING"}
  ]
  deleteUser(){
    alert("Successfully Deleted");
  }


}
