import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { newOrder } from 'src/app/models/newOrder.interface';
import { OrderService } from 'src/app/services/order.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css'],
})
export class NewOrderComponent implements OnInit {
  concreteElement: string[] = [
    'Beam',
    'Slab',
    'Column',
    'Wall',
    'Stairs',
    'Others',
  ];
  myForm: FormGroup;
  idOrder: any;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private router: Router,
    private snackBar: MatSnackBar,
    private aRoute: ActivatedRoute,
  ) {
    this.myForm = this.fb.group({
      deliveryAddress: ['', Validators.required],
      concreteClass: ['', Validators.required],
      concreteElement: ['', Validators.required],
      amount: ['', Validators.required],
      unloadingTime: ['', Validators.required],
      additionalInfo: ['', Validators.required],
      deliveryDate: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
    });
    const idParam = 'id';
    this.idOrder = this.aRoute.snapshot.params[idParam];
  }
  ngOnInit(): void {
    if (this.idOrder !== undefined) {
      this.editOrder();
    }
  }
  goHomePage() {
    this.router.navigate(['/homePage']);
  }
  goConfirm() {
    const order: newOrder = {
      deliveryAddress: this.myForm.get('deliveryAddress')!.value,
      concreteClass: this.myForm.get('concreteClass')!.value,
      concreteElement: this.myForm.get('concreteElement')!.value,
      amount: this.myForm.get('amount')!.value,
      unloadingTime: this.myForm.get('unloadingTime')!.value,
      additionalInfo: this.myForm.get('additionalInfo')!.value,
      deliveryDate: this.myForm.get('deliveryDate')!.value,
      telefono: this.myForm.get('telefono')!.value,
      email: this.myForm.get('email')!.value,
    };
    if (this.idOrder !== undefined) {
      this.changeOrder(order);
    } else {
      this.addOrder(order);
    }
  }
  addOrder(order: newOrder) {
    this.orderService.addOrder(order);
    this.snackBar.open('Your order has been saved!', '', { duration: 3000 });
    this.router.navigate(['/']);
  }
  editOrder() {
    const order: newOrder = this.orderService.showIndexOrder(this.idOrder);
    this.myForm.patchValue({
      deliveryAddress: order.deliveryAddress,
      concreteClass: order.concreteClass,
      concreteElement: order.concreteElement,
      amount: order.amount,
      unloadingTime: order.unloadingTime,
      additionalInfo: order.additionalInfo,
      deliveryDate: order.deliveryDate,
      telefono: order.telefono,
      email: order.email,
    });
  }
  changeOrder(order: newOrder) {
    this.orderService.editOrder(order, this.idOrder);
    this.snackBar.open('Your order has been changed!', '', { duration: 3000 });
    this.router.navigate(['/orders']);
  }
}
