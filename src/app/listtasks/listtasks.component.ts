import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listtasks',
  templateUrl: './listtasks.component.html',
  styleUrls: ['./listtasks.component.css']
})
export class ListtasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users = [
    {id:101,firstname:"Adithya",lastname:"Reddy",email:"adithyareddy@gmail.com"},
    {id:102,firstname:"Vishnu",lastname:"Reddy",email:"vvr@gmail.com"},
    {id:103,firstname:"Challe",lastname:"Inka",email:"ci@gmail.com"}
  ];

  deleteUsers(){
    alert("Successfully Deleted");
  }
tasks=[
  {id:1,name:"Install Java",status:"COMPLETED"},
  {id:2,name:"Install NodeJS",status:"PENDING"}
]

}
