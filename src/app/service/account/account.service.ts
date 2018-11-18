import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/model/user-model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  user: UserModel;
  constructor() {
  }

  /**
   * checks if a user is signed in client
   */
  isLoggedIn(): boolean {
    return this.user !== undefined;
  }

  getUserLoggedIn() {
    return this.user;
  }

  /**
   * verify the user to login
   * @param username username input string[_A-Za-z0-9]
   * @param password password input string[_A-Za-z0-9]
   */
  tryLogin(username: string, password: string): boolean {
    this.user = new UserModel();
    this.user.name = username;
    return true;
  }
}
