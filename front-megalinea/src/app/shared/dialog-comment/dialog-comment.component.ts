import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-comment',
  standalone: true,
  imports: [
    CommonModule, 
    MatDialogModule, 
    MatButtonModule, 
    MatInputModule, 
    FormsModule],
  templateUrl: './dialog-comment.component.html',
  styleUrls: ['./dialog-comment.component.css']
})
export class DialogCommentComponent {
  comment: string = '';

  constructor(
    public dialogRef: MatDialogRef<DialogCommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { action: string }
  ) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    this.dialogRef.close(this.comment);
  }
}
