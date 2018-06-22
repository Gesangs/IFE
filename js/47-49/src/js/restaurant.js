import { Cook } from "./cook";
import { Waiter } from "./waiter";

export class Restaurant {
    constructor(obj) {
        this.cash = obj.cash;
        this.seats = obj.seats;

        this.customerQueue = [];
        this.waiterQueue = [];
        this.cookQueue = [];
        this.settle = this.settle.bind(this)
        document.getElementById("cash").innerHTML = "$" + this.cash;
    }

    // 聘用
    hire(worker, obj) {
        switch(worker) {
            case "Cook": 
                this.cookQueue.push(new Cook(obj));
            break;
            case "Waiter":
                this.waiterQueue.push(new Waiter(obj));
            break;
        }       
    }

    // 解雇
    fire(worker) {
        this.staff.map((item, index) => {
            if(item.id === worker.id) {
                this.staff.splice(index, 1);
            }
        })
    }

    // 接待客人进店
    setCustomerQueue(one) {
        this.customerQueue.push(one);
    }

    // 结账
    settle(cash) {
        this.cash += cash;
        document.getElementById("cash").innerHTML = "$" + this.cash;
        this.customerQueue.map((item) => {
            item.y -= (item.height + 20);
            item.node.moveTo(item.x, item.y);
        })
        this.next();
    }

    // 下一位客人
    next() {
        let waiter = this.waiterQueue[0];
        let cook = this.cookQueue[0];
        let customer = this.customerQueue.shift();

        if(customer && waiter && cook) {
            customer.setNext({
                restaurant: this,
                waiter
            });
    
            waiter.setNext({
                cook,
                customer
            })
    
            cook.setNext(waiter)   

            customer.order();
        }
    }
}