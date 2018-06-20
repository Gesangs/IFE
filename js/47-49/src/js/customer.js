import { delay, menu, eatTime } from "./config";
import { Food } from "./food";
import { Handler } from "./handler";
// 顾客类
export class Customer extends Handler {
    constructor(name) {
        super()
        this.name = name;
        this.foodList = [];
        this.cash = null;

        this.order = this.order.bind(this)
        this.eat = this.eat.bind(this)
    }

    // 点菜
    async order() {
        console.log(this.name + "：小儿请上菜！");
        // 随机点几个菜
        let len = random(4) + 1;
        // 随机点菜
        while (len) {
            let index = random(menu.length)
            let food = new Food(menu[index]);
            this.foodList.push(food);
            len--;
        }
        await delay(3000, this.foodList).then(this.next.work)
    }

    setFoodList(food){
        this.foodList.push(food);   
    }

    // 吃菜
    async eat(food) {
        let eating = null;
        while(eating = this.foodList.shift()) {
            await delay(eatTime, food).then((value) => {console.log(value.name + "真美味")})
        }
    }
}

// 生成随机数
function random(len) {
    return Math.floor(Math.random() * (len - 1));
}
