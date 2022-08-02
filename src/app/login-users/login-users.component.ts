import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-users',
  templateUrl: './login-users.component.html',
  styleUrls: ['./login-users.component.css']
})
export class LoginUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users = [
    {id:232,firstname:"Adithya",lastname:"Reddy",email:"adithyareddy@gmail.com"},
    {id:222,firstname:"Vishnu",lastname:"Reddy",email:"vvr@gmail.com"},
    {id:222,firstname:"challe",lastname:"inka",email:"ci@gmail.com"}
  ];

  deleteUsers(){
    alert("Successfully Deleted");
  }

}
