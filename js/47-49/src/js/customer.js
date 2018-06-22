import { delay, menu, TextBox } from "./config";
import { Food } from "./food";
import { Handler } from "./handler";

// 顾客类
export class Customer extends Handler {
    constructor(obj) {
        super(obj)
        this.name = obj.name;
        this.foodList = [];
        this.cash = null;

        this.order = this.order.bind(this)
        this.eat = this.eat.bind(this)
        this.draw()
        this.node = null;
        this.timer = null;
    }

    // 点菜
    async order() {
        let setText = this.node.setText.bind(this.node);
        setText("小二请上菜")
        let waiter = this.next.waiter;
        waiter.node.moveTo(this.x - 100, this.y);
        delay(900).then(() => {
            waiter.node.setText("欢迎光临，请问您需要点什么～")
        })
        // 随机点几个菜
        let len = random(4) + 1;
        // 随机点菜
        while (len) {
            let index = random(menu.length)
            let food = new Food(menu[index]);
            this.foodList.push(food);
            this.cash += food.profit;
            len--;
        }
        await delay(3000, this.foodList).then((list) => {
            setText(list)
            clearInterval(this.timer)
            this.timer = setInterval(() => {
                setText(list)
            }, 1000)
            waiter.toCook(list)
        })
    }

    // 吃菜
    eat(food){
        let checkEatEnd = this.checkEatEnd.bind(this);
        food.startEat().then((t) => {
            clearInterval(t);
            checkEatEnd()
        })
    }

    // 检查是否全部吃完，吃完就结账
    checkEatEnd() {
        if (this.foodList.every((item) => item.eatState === 0)) {
            clearInterval(this.timer)
            let customer = this.node;
            customer.setText("真棒！下次还来 <br /> $" + this.cash);
            delay(1000).then(() => {
                document.getElementById("app").removeChild(customer.box);
                this.next.restaurant.settle(this.cash)
            })
        }
    }

    draw() {
        let image = new Image(this.width, this.height);
        image.src = "../src/image/customer.jpeg";
        image.onload = () => {
            let box = new TextBox({
                left: this.x,
                top: this.y,
                img: image,
                class: "customer"
            })
            this.node = box;
        }
    }
}

// 生成随机数
function random(len) {
    return Math.floor(Math.random() * (len - 1));
}
