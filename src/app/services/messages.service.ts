import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  showMessage(msg: string, isError: boolean = false) {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
      panelClass: isError ? ['msg-error'] :['msg-success']
    })
  }
}
