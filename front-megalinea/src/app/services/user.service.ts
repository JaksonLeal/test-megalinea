import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type UserRole = 'REQUESTER' | 'APPROVER';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser = new BehaviorSubject<{ name: string; role: UserRole }>({
    name: 'jleal',
    role: 'REQUESTER'
  });

  user$ = this.currentUser.asObservable();

  setUser(user: { name: string; role: UserRole }) {
    this.currentUser.next(user);
  }

  getUser() {
    return this.currentUser.value;
  }
}
