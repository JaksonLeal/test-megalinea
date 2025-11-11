import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-new-request-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './new-request-dialog.component.html',
})
export class NewRequestDialogComponent {
  requestData = {
    title: '',
    description: '',
    type: ''
  };

  constructor(private dialogRef: MatDialogRef<NewRequestDialogComponent>) { }

  save() {
    if (this.requestData.title && this.requestData.description) {
      this.dialogRef.close(this.requestData);
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
