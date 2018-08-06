import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../service/user';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  users:User[];
  userForm:boolean = true;
  isNewUser:boolean = true;
  newUser:any ={};
  
  constructor (private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  //Add(or)save user data to the service modal
  saveUser(user: User) {
    if(this.newUser) {
      this.userService.addUser(user);
    }
   this.router.navigateByUrl('/dashboard');
  }

  //Reset the user data to empty and send it back to dashboard page
  cancelNewUser(){
    this.newUser = {};
    this.router.navigateByUrl('/dashboard');
  }
}
