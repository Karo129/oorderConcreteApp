import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-message-confirm',
  templateUrl: './message-confirm.component.html',
  styleUrls: ['./message-confirm.component.css']
})
export class MessageConfirmComponent {
message: string;
btn = 'accept';
constructor( public dialogRef: MatDialogRef<MessageConfirmComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    this.message = data.message;

}
  

  onNoClick(): void {
    this.dialogRef.close();
  }

}
