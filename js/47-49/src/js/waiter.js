import {Employee} from "./employee"
import {delay, moveTime, TextBox} from "./config";

export class Waiter extends Employee {
    constructor(obj) {
        super(obj)
        this.toCook = this.toCook.bind(this)
        this.toCustomer = this.toCustomer.bind(this)
        this.draw()
        this.node = null;
    }

    // 告诉厨师做那些菜
    async toCook(foods) {
        let cook = this.next.cook;
        this.node.setText("请稍等")
        this.node.moveTo(cook.node.left + 100, cook.node.top);
        await delay(moveTime, foods).then(cook.cooking);
    }

    // 端菜上桌
    async toCustomer(food) {
        let customer = this.next.customer;
        let cook = this.next.cook;
        let setText = this.node.setText.bind(this.node);
        setText(food.name + "做好了");
        this.node.moveTo(customer.x - 100, customer.y);
        delay(1000).then(() => {
            setText("");
            this.node.moveTo(cook.node.left + 100, cook.node.top);
        })
        await delay(moveTime, food).then(customer.eat);
    }

    draw() {
        let image = new Image(this.width, this.height);
        image.src = "../src/image/waiter.jpg";
        image.onload = () => {
            let box = new TextBox({
                left: this.x,
                top: this.y,
                img: image,
                class: "waiter"
            })
            this.node = box;
        }
    }
 
}