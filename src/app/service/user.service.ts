import { Injectable } from '@angular/core';
import  {User} from './user';
import {USER_PERSONS} from './user-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private upersons=USER_PERSONS;
  private editUserdata:User;

  //Get User Data
  getUsersFromData():User[]{
    console.log(this.upersons);
    return this.upersons;
  }

  //Add New User
  addUser(user:User){
    this.upersons.push(user);
    console.log(this.upersons);

  }

  //Update User 
  updateUser(user:User){
    let index=this.upersons.findIndex(x => x.id == user.id);
    this.upersons[index]=user;
  }

  //Delete User
  deleteUser(user:User){
    this.upersons.splice(this.upersons.indexOf(user),1);
    console.log(this.upersons);
  }

  //Getting edit user data from user list page
  getEditUserdata(user:User) {
    this.editUserdata = {
      id:user.id,
      name:user.name,
      surname: user.surname,
      birthDate: user.birthDate,
      phone: user.phone,
      city: user.city,
      street: user.street,
      number: user.number
    }
  }

  //Return the editUser data to caller
  retunEditData(){
    return this.editUserdata;
  }
}
