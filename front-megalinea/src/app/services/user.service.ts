import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type UserRole = 'REQUESTER' | 'APPROVER';

export interface User {
  name: string;
  role: UserRole;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({ name: 'jleal', role: 'REQUESTER' });
  user$ = this.userSubject.asObservable();

  setUser(user: User) {
    this.userSubject.next(user);
  }

  getCurrentUser(): User {
    return this.userSubject.value;
  }
}
