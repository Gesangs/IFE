import {Employee} from "./employee"
import {delay, moveTime} from "./config";

export class Waiter extends Employee {
    constructor(obj) {
        super(obj)
        this.work = this.work.bind(this)
    }

    async work(food) {
        if (Array.isArray(food)) {
            let str = "";
            food.map((item) => {
                str += item.name + "、";
            })
            console.log("您点了" + str);
            await delay(moveTime, food).then(this.next.cooking);
        } else {
            console.log(food.name + "做好了")
            await delay(moveTime, food).then(this.next.eat);
        }
    }
}