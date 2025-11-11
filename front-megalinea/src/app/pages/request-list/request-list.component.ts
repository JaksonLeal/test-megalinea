import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogCommentComponent } from '../../shared/dialog-comment/dialog-comment.component';
import { UserRole, UserService } from '../../services/user.service';
import { NewRequestDialogComponent } from '../../components/new-request-dialog/new-request-dialog.component';

@Component({
  selector: 'app-request-list',
  standalone: true,
  imports: [CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  templateUrl: './request-list.component.html',
  styleUrl: './request-list.component.css'
})
export class RequestListComponent implements OnInit {

  userRole: UserRole = 'REQUESTER';
  displayedColumns: string[] = ['title', 'requester', 'approver', 'type', 'status', 'actions'];
  requests: any[] = [];

  constructor(
    private requestService: RequestService,
    private userService: UserService,
    private snack: MatSnackBar,
    private dialog: MatDialog) { }

  ngOnInit(): void {

    this.userService.user$.subscribe(u => this.userRole = u.role);
    this.loadRequests();

  }

  openNewRequestDialog(): void {
    const dialogRef = this.dialog.open(NewRequestDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const newRequest = {
          ...result,
          requester: 'jleal',  // Usuario requester
          approver: 'amartinez',
          status: 'PENDING'
        };

        this.requestService.create(newRequest).subscribe({
          next: () => {
            alert('Request created successfully');
            this.loadRequests();
          },
          error: (err) => console.error('Error creating request:', err)
        });
      }
    });
  }


  approve(request: any) {
    const dialogRef = this.dialog.open(DialogCommentComponent, {
      width: '400px',
      data: { action: 'approve' }
    });

    dialogRef.afterClosed().subscribe(comment => {
      if (comment) {
        this.requestService.approve(request.id, comment).subscribe({
          next: () => {
            request.status = 'APPROVED';
            this.snack.open('Request approved ✅', 'Close', { duration: 2000 });
          },
          error: () => this.snack.open('Error approving request ❌', 'Close', { duration: 2000 })
        });
      }
    });
  }

  reject(request: any) {
    const dialogRef = this.dialog.open(DialogCommentComponent, {
      width: '400px',
      data: { action: 'reject' }
    });

    dialogRef.afterClosed().subscribe(comment => {
      if (comment) {
        this.requestService.reject(request.id, comment).subscribe({
          next: () => {
            request.status = 'REJECTED';
            this.snack.open('Request rejected ❌', 'Close', { duration: 2000 });
          },
          error: () => this.snack.open('Error rejecting request ⚠️', 'Close', { duration: 2000 })
        });
      }
    });
  }

  loadRequests(): void {
    this.requestService.getAll().subscribe({
      next: (data) => {
        this.requests = data;
        console.log('Requests loaded:', data);
      },
      error: (err) => console.error('Error loading requests:', err)
    });
  }

}
