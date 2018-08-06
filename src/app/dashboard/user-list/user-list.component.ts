import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { User } from '../../service/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  editedUser:any = {};
  queryString:string;
  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.getUsers();
  }

  // Get user data from Service
  getUsers(){
    this.users = this.userService.getUsersFromData();
  }

  //Remove user data via service in modal
  removeUser(user:User) {
    this.userService.deleteUser(user);
  }

  showEditUserForm(user:User) {
    this.editedUser = {
      id:user.id,
      name:user.name,
      surname: user.surname,
      birthDate: user.birthDate,
      phone: user.phone,
      city: user.city,
      street: user.street,
      number: user.number
    }
    this.userService.getEditUserdata(this.editedUser);
    this.router.navigateByUrl('/user/edit');
  }

  clearSearch() {
    this.queryString='';
  }
}
