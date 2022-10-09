import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
  ) { }

  ngOnInit(): void {
    
  }

  cancel() {
    this.dialogRef.close(false);
  }

  delete() {
    this.dialogRef.close(true);
  }

}
