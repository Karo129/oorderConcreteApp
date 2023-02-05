import { Injectable } from '@angular/core';
import {newOrder} from '../models/newOrder.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  dataOrder: newOrder[]=[ ];

  constructor() { 
   }
   getOrders() {
   return this.dataOrder.slice();
  }
 
  addOrder(order: newOrder) {
  this.dataOrder.push(order);
  }

deleteOrder(index: number){
  this.dataOrder.splice(index, 1);
}

showIndexOrder(index: number){
  return this.dataOrder[index];
}

editOrder(order: newOrder, idOrder: number){
this.dataOrder[idOrder].deliveryAddress = order.deliveryAddress;
this.dataOrder[idOrder].concreteClass = order.concreteClass;
this.dataOrder[idOrder].concreteElement = order.concreteElement;
this.dataOrder[idOrder].amount = order.amount;
this.dataOrder[idOrder].unloadingTime = order.unloadingTime;
this.dataOrder[idOrder].additionalInfo = order.additionalInfo;
this.dataOrder[idOrder].deliveryDate = order.deliveryDate;
this.dataOrder[idOrder].telefono = order.telefono;
this.dataOrder[idOrder].email = order.email;

}

}





