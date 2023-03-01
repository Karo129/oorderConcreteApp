import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { newOrder } from 'src/app/models/newOrder.interface';
import { OrderService } from 'src/app/services/order.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MessageConfirmComponent } from '../shared/message-confirm/message-confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {

  orderList: newOrder[] = [];
 
  constructor(
    private orderService: OrderService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.addOrderToList();
  }

  addOrderToList() {
    this.orderList = this.orderService.getOrders();

  }
  deleteOrder(index: number) {
    const dialogRef = this.dialog.open(MessageConfirmComponent, {
      width: '350px',
      data: { message: 'Are you sure to delete Order?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'accept') {
        this.orderService.deleteOrder(index);
        this.addOrderToList();
        this.snackBar.open('The order has been canceled!', '', {
          duration: 3000
        });
      }
    });
  }

  goHomePage() {
    this.router.navigate(['/homePage']);
  }

  goEdit(index: number){
    
    this.router.navigate([`/edit/${index}`]);
    console.log(index);
  }

}
