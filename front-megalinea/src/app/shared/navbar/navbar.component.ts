import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { Subject } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { UserService, UserRole } from '../../services/user.service';
import { MatMenuModule } from '@angular/material/menu';
import { PLATFORM_ID } from '@angular/core';

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
  pendingRequests: any[] = [];
  selectedUser: UserRole = 'REQUESTER';
  private destroy$ = new Subject<void>();

  constructor(
    private requestService: RequestService,
    private userService: UserService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.userService.user$.subscribe((user) => {
        this.selectedUser = user.role;

        if (user.role === 'APPROVER') {
          this.loadPendingRequests(user.name);
        } else {
          this.pendingRequests = [];
          this.pendingCount = 0;
        }
      });
    }
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

  changeUser(role: UserRole): void {
    const name = role === 'APPROVER' ? 'amartinez' : 'jleal';
    this.userService.setUser({ name, role });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
