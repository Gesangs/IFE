import { Employee } from "./employee"
import { delay, TextBox } from "./config";
export class Cook extends Employee {
    constructor(obj) {
        super(obj)

        this.cooking = this.cooking.bind(this)
        this.draw()
        this.node = null;
        this.timer = null;
    }

    // 做菜，做完通知服务员
    async cooking(foods) {
        let len = foods.length;
        let setText = this.node.setText.bind(this.node)
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            setText(foods);        
        })
        for(let i = 0; i < len; i++) {
            let food = foods[i];
            food.startCooking(food.time).then(clearInterval)
            await delay(food.time, food).then(this.next.toCustomer);
        }            
    }
    draw() {
        let image = new Image(this.width, this.height);
        image.src = "../src/image/cook.jpeg";
        image.onload = () => {
            let box = new TextBox({
                left: this.x,
                top: this.y,
                img: image,
                class: "cook"
            })
            this.node = box;
        }
    }
    
}