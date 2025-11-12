import { Component, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-new-request-dialog',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './new-request-dialog.component.html',
})
export class NewRequestDialogComponent {
  @Input()
  approvers: string[] = []; // recibidos desde el RequestListComponent

  requestData = {
    title: '',
    description: '',
    type: '',
    approver: ''
  };

  constructor(private dialogRef: MatDialogRef<NewRequestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { if (data?.approvers) this.approvers = data.approvers; }

  save() {
    if (this.requestData.title && this.requestData.description) {
      this.dialogRef.close(this.requestData);
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
