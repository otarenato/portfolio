import { Injectable } from '@angular/core';
import { initializeApp } from '@firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  async getUsers(): Promise<UserModel[]> {
    let _users: UserModel[] = [];
    const app = initializeApp(environment.firebase);
    const db = getFirestore(app);
    const usersCol = collection(db, 'Users');
    const usersSnaphot = await getDocs(usersCol);
    const usersList = usersSnaphot.docs.map(usr => usr.data());
    usersList.forEach(usr => {
      let _usr = new UserModel();
      _usr.user = usr.user;
      _usr.password = usr.password;
      _usr.user_type = usr.user_type;
      _users.push(_usr);
    });
    return _users;
  }
}
