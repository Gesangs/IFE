import {Employee} from "./employee"
import {delay, moveTime} from "./config";

export class Waiter extends Employee {
    constructor(obj) {
        super(obj)
        this.toCook = this.toCook.bind(this)
        this.toCustomer = this.toCustomer.bind(this)
        this.draw("waiter")
    }

    // 告诉厨师做那些菜
    async toCook(foods) {
        let cook = this.next.cook;
        this.node.setText("请稍等")
        this.node.moveTo(cook.x + cook.width, cook.y);
        await delay(moveTime, foods).then(cook.cooking);
    }

    // 端菜上桌
    async toCustomer(food) {
        let customer = this.next.customer;
        let cook = this.next.cook;
        let setText = this.node.setText.bind(this.node);
        
        setText(food.name + "做好了");
        this.node.moveTo(customer.x - customer.width, customer.y);
        delay(1000).then(() => {
            setText("");
            this.node.moveTo(cook.x + cook.width, cook.y);
        })
        await delay(moveTime, food).then(customer.eat);
    }
 
}