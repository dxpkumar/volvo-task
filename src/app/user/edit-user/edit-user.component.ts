import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { User } from '../../service/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  users: User[];
  editUserForm:boolean = true;
  editedUser:any = {};

  constructor(private userService:UserService, private router: Router) { }

  //Getting the edit user data from service to set to the form elements
  ngOnInit() {
    this.editedUser = this.userService.retunEditData();
  }
  
  //Sending the updated user data to service
  updateUser(){
    this.userService.updateUser(this.editedUser);
    this.editedUser = {};
    this.router.navigateByUrl('/dashboard');
  }

  //Reset the edited user data and go back to dashboard 
  cancelEdits(){
    this.editedUser = {};
    this.router.navigateByUrl('/dashboard');
  }
}
