import { eatTime, delay } from "./config";

export class Food {
    constructor(obj) {
        // 菜名
        this.name = obj.name;
        // 利润
        this.profit = obj.price - obj.cost;
        // 状态（还未上(null)、正在吃（还有多久吃完）(1,2,3)、已吃完(0) ）
        this.eatState = null;
        this.cookState = null;
        this.time = obj.time;

        this.startEat = this.startEat.bind(this);
    }

    startCooking(time) {
        this.cookState = time / 1000;
        let timer = setInterval(() => {
            this.cookState--;
        }, 1000)
        return delay(time, timer)    
    }

    // 开始吃，启动计时器
    startEat(){
        this.eatState = eatTime / 1000;    
        let timer = setInterval(() => {
            this.eatState--;
        }, 1000)
        return delay(eatTime, timer)
    }
}