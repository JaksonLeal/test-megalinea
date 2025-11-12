import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { UserService, UserRole } from '../../services/user.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  pendingCount = 0;
  selectedUserRole: UserRole = 'REQUESTER';
  selectedUserName = '';
  pendingRequests: any[] = [];

  approvers: string[] = [];
  requesters: string[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    private requestService: RequestService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loadUsersFromRequests();

    this.userService.user$.subscribe((user) => {
      this.selectedUserRole = user.role;
      this.selectedUserName = user.name;

      if (user.role === 'APPROVER') {
        this.loadPendingRequests(user.name);
      } else {
        this.pendingCount = 0;
      }
    });
  }

  loadUsersFromRequests(): void {
    this.requestService.getAll().subscribe({
      next: (requests) => {
        const approversSet = new Set<string>();
        const requestersSet = new Set<string>();

        requests.forEach((r) => {
          if (r.approver) approversSet.add(r.approver);
          if (r.requester) requestersSet.add(r.requester);
        });

        this.approvers = Array.from(approversSet);
        this.requesters = Array.from(requestersSet);
      },
      error: (err) => console.error('Error loading users:', err)
    });
  }

  loadPendingRequests(approver: string): void {
    this.requestService.getPendingRequests(approver).subscribe({
      next: (data) => {
        this.pendingRequests = data;
        this.pendingCount = data.length;
      },
      error: (err) => console.error('Error loading pending requests:', err)
    });
  }

  changeUser(role: UserRole, name: string): void {
    this.userService.setUser({ name, role });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
